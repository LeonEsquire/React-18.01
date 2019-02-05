import fs from 'file-system';
import fetch from 'node-fetch';
import async from 'express-async-await';
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

    getList(){
        return new Promise((resolve, reject) => {
            fs.readdir(`${this.path}/`, (error, files) => error ? reject(error.message) : resolve(files.map(file => {
                let matches = file.match(new RegExp(`^(.*?)\.${DB.EXTENSION}$`));

                return matches ? {
                    id: matches[1],
                    current: matches[1] === this.id
                } : null;
            }).filter(file => !!file)));
        });
    }

    getInfo(id = this.id){
        return new Promise((resolve, reject) => {
            fs.stat(`${this.path}/${id}.${DB.EXTENSION}`, (error, stats) => error ? reject(error.message) : resolve({
                id: id,
                size: stats.size,
                date: stats.ctime,
                current: id === this.id
            }));
        });
    }

    exists(id){
        return new Promise((resolve, reject) => {
            fs.access(`${this.path}/${id}.${DB.EXTENSION}`, error => error && error.code !== 'ENOENT' ? reject(error.message) : resolve(!error));
        });
    }

    create(id){
        return new Promise((resolve, reject) => {
            this.exists(id).then(result => {
                if(result){
                    reject(`Database "${id}" already exists`);
                }else{
                    fs.open(`${this.path}/${id}.${DB.EXTENSION}`, 'w', (error, fd) => {
                        if(error)
                            reject(error.message);

                        fs.close(fd, error => {
                            if(error){
                                reject(error.message);
                            }else{
                                this.init(id).then(resolve).catch(reject);
                            }
                        });
                    });
                }
            }).catch(reject);
        });
    }

    rename(oldId, newId){
        let opened = oldId === this.id && this.db;

        return new Promise((resolve, reject) => {
            let doit = () => {
                fs.rename(`${this.path}/${oldId}.${DB.EXTENSION}`, `${this.path}/${newId}.${DB.EXTENSION}`, error => {
                    if(error){
                        if(opened) {
                            this.open(oldId).then(result => reject(error.message)).catch(reject);
                        }else{
                            reject(error.message);
                        }
                    }else{
                        if(opened) {
                            this.open(newId).then(resolve).catch(reject);
                        }else{
                            resolve({ success: true });
                        }
                    }
                });
            };

            this.exists(oldId).then(result => {
                if(result){
                    this.exists(newId).then(result => {
                        if(result){
                            reject(`Database "${newId}" already exists`);
                        }else{
                            if(opened){
                                this.close(oldId).then(result => {
                                    doit();
                                }).catch(reject);
                            }else{
                                doit();
                            }
                        }
                    }).catch(reject);
                }else{
                    reject(`Database "${oldId}" not exists`);
                }
            }).catch(reject);
        });
    }

    init(id = this.id){
        return new Promise((resolve, reject) => {
            let opened = this.id,
                doit = () => {
                    this.db.run(`BEGIN TRANSACTION; ${Object.keys(schema).map(table => {
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

                        return `CREATE TABLE ${table} (${params.join(', ')});`;
                    }).join(' ')} COMMIT TRANSACTION;`, (error) => {
                        if(error){
                            if(id !== opened && opened){
                                this.open(opened).then(result => reject(error.message)).catch(reject);
                            }else{
                                reject(error.message);
                            }
                        }else{
                            if(id !== opened && opened){
                                this.open(opened).then(resolve).catch(reject);
                            }else{
                                resolve({ success: true });
                            }
                        }
                    });
                };

            if(id !== opened){
                this.open(id).then(result => {
                    this.getInfo(id).then(result => {
                        if(result.size) {
                            this.clear(id).then(result => doit()).catch(reject);
                        }else{
                            doit();
                        }
                    }).catch(reject)
                }).catch(reject);
            }else{
                doit();
            }
        });
    }

    clear(id = this.id){
        return new Promise((resolve, reject) => {
            let opened = id === this.id && this.db,
                doit = () => {
                fs.truncate(`${this.path}/${id}.${DB.EXTENSION}`, 0, error => {
                    if(error){
                        if(opened){
                            this.open(id).then(result => reject(error.message)).catch(reject);
                        }else{
                            reject(error.message);
                        }
                    }else{
                        if(opened){
                            this.open(id).then(resolve).catch(reject);
                        }else{
                            resolve({ success: true });
                        }
                    }
                });
            };

            if(opened){
                this.close(id).then(result => doit()).catch(reject);
            }else{
                doit();
            }
        });
    }

    delete(id = this.id){
        return new Promise((resolve, reject) => {
            let doit = () => {
                fs.unlink(`${this.path}/${id}.${DB.EXTENSION}`, error => error ? reject(error.message) : resolve({ success: true }));
            };

            this.exists(id).then(result => {
                if(result){
                    if(id === this.id && this.db) {
                        this.close(id).then(result => doit()).catch(reject);
                    }else{
                        doit();
                    }
                }else{
                    reject(`Database "${id}" not exists`);
                }
            }).catch(reject);
        });
    }

    open(id){
        return new Promise((resolve, reject) => {
            let doit = () => {
                this.id = id;
                this.db = new sqlite3.Database(`${this.path}/${id}.${DB.EXTENSION}`, sqlite3.OPEN_READWRITE, error => error ? reject(error.message) : resolve({ success: true }));
            };

            if(id === this.id){
                reject(`Database "${id}" already opened`);
            }else{
                if(this.db){
                    this.close(this.id).then(result => doit()).catch(reject);
                }else{
                    doit();
                }

            }
        });
    }

    close(id){
        return new Promise((resolve, reject) => {
            if(id !== this.id){
                reject(`Wrong database id "${id}"`);
            }else{
                this.db.close(error => {
                    this.db = null;
                    this.id = null;

                    error ? reject(error.message) : resolve({ success: true });
                });
            }
        });
    }

    fill(id = this.id){
        return new Promise((resolve, reject) => {
            let opened = this.id,
                doit = () => {
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
                                };

                                this.db.run(`BEGIN TRANSACTION; INSERT INTO users (id, name) VALUES (${data.users.map(user => `${user.id}, '${user.name}'`).join('),(')}); INSERT INTO posts (id, title, text, author) VALUES (${data.posts.map(post => `${post.id}, '${post.title}', '${post.text}', ${post.author}`).join('),(')}); INSERT INTO comments (id, text, author, post) VALUES (${data.comments.map(comment => `${comment.id}, '${comment.text}', ${comment.author}, ${comment.post}`).join('),(')}); COMMIT TRANSACTION;`, [], error => {
                                    if(error){
                                        if(id !== opened && opened){
                                            this.open(opened).then(result => reject(error.message)).catch(reject);
                                        }else{
                                            reject(error.message);
                                        }
                                    }else{
                                        if(id !== opened && opened){
                                            this.open(opened).then(resolve).catch(reject);
                                        }else{
                                            resolve({ success: true });
                                        }
                                    }
                                });


                            }).catch(error => reject(error.message));
                        }).catch(error => reject(error.message));
                    }).catch(error => reject(error.message));
                };

            if(id !== opened){
                this.open(id).then(result => doit()).catch(reject);
            }else{
                doit();
            }
        });
    }

    all(table, data = {}){
        return new Promise((resolve, reject) => {
            let filter = '';

            if(data.filter)
                filter = ` WHERE ${Object.keys(data.filter).map(key => `${key}="${data.filter[key]}"`).join(' AND ')}`;

            this.db.all(`SELECT * FROM ${table}${filter}`, [], (error, rows) => error ? reject(error.message) : resolve(rows));
        });
    }

    get(table, data = {}){
        return new Promise((resolve, reject) => {
            let filter = '';

            if(data.filter)
                filter = ` WHERE ${Object.keys(data.filter).map(key => `${key}='${data.filter[key]}'`).join(' AND ')}`;

            this.db.get(`SELECT * FROM ${table}${filter}`, [], (error, row) => error ? reject(error.message) : resolve(row));
        });
    }

    insert(table, data = {}){
        return new Promise((resolve, reject) => {
            let keys = [];

            if(data.values)
                keys = Object.keys(data.values);

            this.db.run(`INSERT INTO ${table} (${keys.join(', ')}) VALUES (${keys.map(key => `'${data.values[key]}'`).join(', ')});`, [], error => error ? reject(error.message) : resolve({ success: true }));
        });
    }

    update(table, data){
        return new Promise((resolve, reject) => {
            let filter = '';

            if(data.filter)
                filter = ` WHERE ${Object.keys(data.filter).map(key => `${key}='${data.filter[key]}'`).join(' AND ')}`;

            this.db.run(`UPDATE ${table} SET ${Object.keys(data.values).map(key => `${key} = '${data.values[key]}'`).join(', ')}${filter};`, [], error => error ? reject(error.message) : resolve({ success: true }));
        });
    }

    remove(table, data){
        return new Promise((resolve, reject) => {
            let filter = '';

            if(data.filter)
                filter = ` WHERE ${Object.keys(data.filter).map(key => `${key}='${data.filter[key]}'`).join(' AND ')}`;

            this.db.run(`DELETE FROM ${table}${filter};`, [], error => error ? reject(error.message) : resolve({ success: true }));
        });
    }

    query(sql){
        return new Promise((resolve, reject) => {
            this.db.all(sql, [], (error, rows) => error ? reject(error.message) : resolve(rows));
        });
    }

}