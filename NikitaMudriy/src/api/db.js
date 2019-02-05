import fs from 'file-system';
import fetch from 'node-fetch';
import sqlite3 from 'sqlite3';

import schema from './schema';

export default class DB {

    static EXTENSION = 'db';

    db = null;
    id = null;

    constructor(path = '.', id = null){
        sqlite3.verbose();

        this.path = path;

        if(id)
            this.open(id);
    }

    isOpened(id){
        return !!(id && this.id && id === this.id && this.db);
    }

    get(id = this.id){
        return new Promise((resolve, reject) => {
            if(id){
                fs.stat(`${this.path}/${id}.${DB.EXTENSION}`, (error, stats) => error ? reject({ message: error.message }) : resolve({
                    id: id,
                    size: stats.size,
                    date: stats.ctime,
                    current: this.isOpened(id)
                }));
            }else{
                fs.readdir(`${this.path}/`, (error, files) => error ? reject({ message: error.message }) : resolve(files.map(file => {
                    let matches = file.match(new RegExp(`^(.*?)\.${DB.EXTENSION}$`));

                    return matches ? {
                        id: matches[1],
                        current: this.isOpened(matches[1])
                    } : null;
                }).filter(file => !!file)));
            }
        });
    }

    exists(id){
        return new Promise((resolve, reject) => {
            fs.access(`${this.path}/${id}.${DB.EXTENSION}`, error => error && error.code !== 'ENOENT' ? reject({ message: error.message }) : resolve(!error));
        });
    }

    create(id){
        return new Promise(async (resolve, reject) => {
            let exists = await this.exists(id);

            if(exists){
                reject({ message: `Database "${id}" already exists` });
            }else{
                fs.open(`${this.path}/${id}.${DB.EXTENSION}`, 'w', (error, fd) => {
                    if(error){
                        reject({ message: error.message });
                    }else{
                        fs.close(fd, error => error ? reject({ message: error.message }) : resolve(true));
                    }
                });
            }
        });
    }

    rename(oldId, newId){
        return new Promise(async (resolve, reject) => {
            let opened = this.isOpened(oldId),
                oldExists = await this.exists(oldId),
                newExists = await this.exists(newId);

            switch(true){
                case oldExists && newExists:
                    reject({ message: `Database "${newId}" already exists` });
                    break;
                case !oldExists && !newExists:
                    reject({ message: `Database "${oldId}" not exists` });
                    break;
                case !oldExists && newExists:
                    reject({ message: `Database "${oldId}" not exists and "${newId}" already exists` });
                    break;
                default:
                    if(opened)
                        await this.close(oldId);

                    fs.rename(`${this.path}/${oldId}.${DB.EXTENSION}`, `${this.path}/${newId}.${DB.EXTENSION}`, async error => {
                        if(error){
                            if(opened)
                                await this.open(oldId);

                            reject({ message: error.message });
                        }else{
                            if(opened)
                                await this.open(newId);

                            resolve(true);
                        }
                    });
            }
        });
    }

    remove(id){
        return new Promise(async (resolve, reject) => {
            let opened = this.isOpened(id),
                exists = await this.exists(id);

            if(exists){
                if(opened)
                    await this.close(id);

                fs.unlink(`${this.path}/${id}.${DB.EXTENSION}`, error => error ? reject({ message: error.message }) : resolve(true));
            }else{
                reject({ message: `Database "${id}" not exists` });
            }
        });
    }

    open(id){
        return new Promise(async (resolve, reject) => {
            let opened = this.isOpened(this.id) ? this.id : null;

            if(this.isOpened(id)){
                reject({ message: `Database "${id}" already opened` });
            }else{
                if(opened)
                    await this.close(opened);

                this.db = new sqlite3.Database(`${this.path}/${id}.${DB.EXTENSION}`, sqlite3.OPEN_READWRITE, async error => {
                    if(error){
                        if(opened)
                            await this.open(opened);

                        reject({ message: error.message });
                    }else{
                        this.id = id;

                        resolve(true);
                    }
                });
            }
        });
    }

    close(id = this.id){
        return new Promise((resolve, reject) => {
            switch(true){
                case this.id === null:
                    reject({ message: `No database opened` });
                    break;
                case id !== null && !this.isOpened(id):
                    reject({ message: `Wrong database id "${id}"` });
                    break;
                case id === null && this.id !== null:
                    id = this.id;
                default:
                    this.db.close(error => {
                        if(error){
                            reject({ message: error.message });
                        }else{
                            this.db = null;
                            this.id = null;

                            resolve(true);
                        }
                    });
            }
        });
    }

    init(id = this.id){
        return new Promise(async (resolve, reject) => {
            let was = this.id;

            if(!id){
                reject({message: `Wrong database id "${id}"`});
            }else{
                if(id !== was)
                    await this.open(id);

                for(let table in schema){
                    let fields,
                        params = [];

                    if(schema[table].fields){
                        fields = Object.keys(schema[table].fields);

                        if(fields.length){
                            params = fields.map(field => `${field} ${schema[table].fields[field]}`);

                            if(schema[table].keys)
                                params = [...params, ...schema[table].keys];
                        }
                    }

                    this.db.run(`CREATE TABLE ${table} (${params.join(', ')});`, async (error) => {
                        if(id !== was && was)
                            await this.open(was);

                        error ? reject({ message: error.message }) : resolve(true);
                    });
                }
            }
        });
    }

    drop(id = this.id){
        return new Promise(async (resolve, reject) => {
            let opened = this.isOpened(id);

            if(opened)
                await this.close(id);

            fs.truncate(`${this.path}/${id}.${DB.EXTENSION}`, 0, async error => {
                if(opened)
                    await this.open(id);

                error ? reject({ message: error.message }) : resolve(true);
            });
        });
    }

    fill(id = this.id){
        return new Promise(async (resolve, reject) => {
            let was = this.id;

            if(id !== was)
                await this.open(id);

            fetch('https://jsonplaceholder.typicode.com/users').then(result => result.json()).then(users => {
                fetch('https://jsonplaceholder.typicode.com/posts').then(result => result.json()).then(posts => {
                    fetch('https://jsonplaceholder.typicode.com/comments').then(result => result.json()).then(comments => {
                        let emails = {};

                        for(let user of users){
                            emails[user.email.toLowerCase()] = user.id;
                        }

                        let data = {
                                users: users.map(user => {
                                    return {
                                        id: user.id,
                                        name: user.name
                                    };
                                }),
                                posts: posts.map(post => {
                                    return {
                                        id: post.id,
                                        title: post.title,
                                        text: post.body,
                                        author: post.userId
                                    };
                                }),
                                comments: comments.map(comment => {
                                    return {
                                        id: comment.id,
                                        text: comment.body,
                                        author: comment.email.toLowerCase() in emails ? emails[comment.email.toLowerCase()] : users[Math.round(Math.random() * (users.length - 1))].id,
                                        post: comment.postId
                                    };
                                })
                            },
                            inserts = {
                                users: {
                                    fields: ['id', 'name'],
                                    values: data.users.map(user => `${user.id}, '${user.name}'`)
                                },
                                posts: {
                                    fields: ['id', 'title', 'text', 'author'],
                                    values: data.posts.map(post => `${post.id}, '${post.title}', '${post.text}', ${post.author}`)
                                },
                                comments: {
                                    fields: ['id', 'text', 'author', 'post'],
                                    values: data.comments.map(comment => `${comment.id}, '${comment.text}', ${comment.author}, ${comment.post}`)
                                }
                            };

                        for(let insert in inserts){
                            this.db.run(`INSERT INTO ${insert} (${inserts[insert].fields.join(', ')}) VALUES (${inserts[insert].values.join('),(')});`, [], async error => {
                                if(id !== was && was)
                                    await this.open(was);

                                error ? reject({ message: error.message }) : resolve(true);
                            });
                        }
                    }).catch(error => reject({ message: error.message }));
                }).catch(error => reject({ message: error.message }));
            }).catch(error => reject({ message: error.message }));
        });
    }

    clear(id = this.id){
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }

    all(table, filter = null, fields = ['*']){
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT ${fields.join(', ')} FROM ${table}${filter ? ` WHERE ${Object.keys(filter).map(key => `${key}="${filter[key]}"`).join(' AND ')}` : ''};`, [], (error, rows) => error ? reject({ message: error.message }) : resolve(rows));
        });
    }

    first(table, filter = null, fields = ['*']){
        return new Promise((resolve, reject) => {
            this.db.get(`SELECT ${fields.join(', ')} FROM ${table}${filter ? ` WHERE ${Object.keys(filter).map(key => `${key}="${filter[key]}"`).join(' AND ')}` : ''};`, [], (error, row) => error ? reject({ message: error.message }) : resolve(row));
        });
    }

    insert(table, values){
        return new Promise((resolve, reject) => {
            let keys = Object.keys(values);

            this.db.run(`INSERT INTO ${table} (${keys.join(', ')}) VALUES (${keys.map(key => `'${values[key]}'`).join(', ')});`, [], error => error ? reject({ message: error.message }) : resolve(true));
        });
    }

    update(table, values, filter = null){
        return new Promise((resolve, reject) => {
            this.db.run(`UPDATE ${table} SET ${Object.keys(values).map(key => `${key} = '${values[key]}'`).join(', ')}${filter ? ` WHERE ${Object.keys(filter).map(key => `${key}="${filter[key]}"`).join(' AND ')}` : ''};`, [], error => error ? reject({ message: error.message }) : resolve(true));
        });
    }

    delete(table, filter = null){
        return new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM ${table}${filter ? ` WHERE ${Object.keys(filter).map(key => `${key}="${filter[key]}"`).join(' AND ')}` : ''};`, [], error => error ? reject({ message: error.message }) : resolve(true));
        });
    }

    query(sql){
        return new Promise((resolve, reject) => {
            this.db.run(sql, [], async error => error ? reject({ message: error.message }) : resolve(true));
        });
    }

}