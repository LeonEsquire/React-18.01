import fs from 'file-system';
import fetch from 'node-fetch';
import sqlite3 from 'sqlite3';

import schema from './schema';

export default class DB {

    static EXTENSION = 'db';

    static sleep(delay){
        return new Promise((resolve, reject) => setTimeout(resolve, delay));
    }

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

    exists(id){
        return new Promise((resolve, reject) => {
            fs.access(`${this.path}/${id}.${DB.EXTENSION}`, error => error && error.code !== 'ENOENT' ? reject({ message: error.message }) : resolve(!error));
        });
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

    create(id){
        return new Promise(async (resolve, reject) => {
            try{
                let exists = await this.exists(id).catch(error => {
                    throw new Error(error.message);
                });

                if(exists){
                    throw new Error(`Database "${id}" already exists`);
                }else{
                    fs.open(`${this.path}/${id}.${DB.EXTENSION}`, 'w', (error, fd) => {
                        if(error){
                            throw new Error(error.message);
                        }else{
                            fs.close(fd, error => {
                                if(error){
                                    throw new Error(error.message);
                                }else{
                                    resolve(true);
                                }
                            });
                        }
                    });
                }
            }catch(error){
                reject({ message: error.message });
            }
        });
    }

    rename(oldId, newId){
        return new Promise(async (resolve, reject) => {
            try{
                let opened = this.isOpened(oldId),
                    oldExists = await this.exists(oldId).catch(error => {
                        throw new Error(error.message);
                    }),
                    newExists = await this.exists(newId).catch(error => {
                        throw new Error(error.message);
                    });

                switch(true){
                    case oldExists && newExists:
                        throw new Error(`Database "${newId}" already exists`);
                    case !oldExists && !newExists:
                        throw new Error(`Database "${oldId}" not exists`);
                    case !oldExists && newExists:
                        throw new Error(`Database "${oldId}" not exists and "${newId}" already exists`);
                    default:
                        if(opened)
                            await this.close(oldId).catch(error => {
                                throw new Error(error.message);
                            });

                        fs.rename(`${this.path}/${oldId}.${DB.EXTENSION}`, `${this.path}/${newId}.${DB.EXTENSION}`, async error => {
                            if(opened)
                                await this.open(newId).catch(error => {
                                    throw new Error(error.message);
                                });

                            if(error){
                                throw new Error(error.message);
                            }else{
                                resolve(true);
                            }
                        });
                }
            }catch(error){
                reject({ message: error.message });
            }
        });
    }

    remove(id){
        return new Promise(async (resolve, reject) => {
            let opened = this.isOpened(id);

            try{
                let exists = await this.exists(id).catch(error => {
                    throw new Error(error.message);
                });

                if(exists){
                    if(opened)
                        await this.close(id).catch(error => {
                            throw new Error(error.message);
                        });

                    fs.unlink(`${this.path}/${id}.${DB.EXTENSION}`, error => {
                        if(error){
                            throw new Error(error.message);
                        }else{
                            resolve(true);
                        }
                    });
                }else{
                    throw new Error(`Database "${id}" not exists`);
                }
            }catch(error){
                reject({ message: error.message });
            }
        });
    }

    open(id){
        return new Promise(async (resolve, reject) => {
            let was = this.isOpened(this.id) ? this.id : null,
                opened = this.isOpened(id);

            try{
                if(opened){
                    throw new Error(`Database "${id}" already opened`);
                }else{
                    if(opened)
                        await this.close(was).catch(error => {
                            throw new Error(error.message);
                        });

                    this.db = new sqlite3.Database(`${this.path}/${id}.${DB.EXTENSION}`, sqlite3.OPEN_READWRITE, async error => {
                        if(error){
                            if(was)
                                await this.open(was).catch(error => {
                                    throw new Error(error.message);
                                });

                            throw new Error(error.message);
                        }else{
                            this.id = id;

                            resolve(true);
                        }
                    });
                }
            }catch(error){
                reject({ message: error.message });
            }
        });
    }

    close(id = this.id){
        return new Promise((resolve, reject) => {
            try{
                switch(true){
                    case this.id === null:
                        throw new Error(`No database opened`);
                    case id !== null && !this.isOpened(id):
                        throw new Error(`Wrong database id "${id}"`);
                    case id === null && this.id !== null:
                        id = this.id;
                    default:
                        this.db.close(error => {
                            if(error){
                                throw new Error(error.message);
                            }else{
                                this.db = null;
                                this.id = null;

                                resolve(true);
                            }
                        });
                }
            }catch(error){
                reject({ message: error.message });
            }
        });
    }

    init(id = this.id){
        return new Promise(async (resolve, reject) => {
            let was = this.id;

            if(id){
                try{
                    if(id !== was)
                        await this.open(id).catch(error => {
                            throw new Error(error.message);
                        });

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

                        await this.query(`CREATE TABLE ${table} (${params.join(', ')});`).catch(error => {
                            throw new Error(error.message);
                        });
                    }

                    if(id !== was && was)
                        await this.open(was).catch(error => {
                            throw new Error(error.message);
                        });

                    resolve(true);
                }catch(error){
                    if(id !== was && was)
                        await this.open(was).catch(error => reject({ message: error.message }));

                    reject({ message: error.message });
                }
            }else{
                throw new Error(`Wrong database id "${id}"`);
            }
        });
    }

    drop(id = this.id){
        return new Promise(async (resolve, reject) => {
            let opened = this.isOpened(id);

            try{
                if(opened)
                    await this.close(id).catch(error => {
                        throw new Error(error.message);
                    });

                fs.truncate(`${this.path}/${id}.${DB.EXTENSION}`, 0, async error => {
                    if(opened)
                        await this.open(id).catch(error => {
                            throw new Error(error.message);
                        });

                    if(error){
                        throw new Error(error.message);
                    }else{
                        resolve(true);
                    }
                });
            }catch(error){
                reject({ message: error.message });
            }
        });
    }

    fill(id = this.id){
        return new Promise(async (resolve, reject) => {
            let was = this.id;

            try{
                let data = {};

                if(id !== was)
                    await this.open(id).catch(error => {
                        throw new Error(error.message);
                    });

                for(let table in schema){
                    await fetch(`https://jsonplaceholder.typicode.com/${table}`).then(result => result.json()).then(result => {
                        data[table] = result;

                        switch(table){
                            case 'users':
                                result = result.map(user => {
                                    return {
                                        id: user.id,
                                        name: user.name
                                    };
                                });
                                break;
                            case 'posts':
                                result = result.map(post => {
                                    return {
                                        id: post.id,
                                        title: post.title,
                                        text: post.body,
                                        author: post.userId
                                    };
                                });
                                break;
                            case 'comments':
                                result = result.map(comment => {
                                    let emails = {};

                                    for(let user of data.users){
                                        emails[user.email.toLowerCase()] = user.id;
                                    }

                                    return {
                                        id: comment.id,
                                        text: comment.body,
                                        author: comment.email.toLowerCase() in emails ? emails[comment.email.toLowerCase()] : data.users[Math.round(Math.random() * (data.users.length - 1))].id,
                                        post: comment.postId
                                    };
                                });
                                break;
                        }

                        return result;
                    }).then(result => {
                        switch(table){
                            case 'users':
                                result = {
                                    fields: ['id', 'name'],
                                    values: result.map(user => `${user.id}, '${user.name}'`)
                                };
                                break;
                            case 'posts':
                                result = {
                                    fields: ['id', 'title', 'text', 'author'],
                                    values: result.map(post => `${post.id}, '${post.title}', '${post.text}', ${post.author}`)
                                };
                                break;
                            case 'comments':
                                result = {
                                    fields: ['id', 'text', 'author', 'post'],
                                    values: result.map(comment => `${comment.id}, '${comment.text}', ${comment.author}, ${comment.post}`)
                                };
                                break;
                        }

                        return result;
                    }).then(async result => {
                        await this.query(`INSERT INTO ${table} (${result.fields.join(', ')}) VALUES (${result.values.join('),(')});`);
                    }).catch(error => {
                        throw new Error(error.message);
                    });

                    await DB.sleep(100);
                }

                if(id !== was && was)
                    await this.open(was).catch(error => {
                        throw new Error(error.message);
                    });

                resolve(true);
            }catch(error){
                if(id !== was && was)
                    await this.open(was).catch(error => reject({ message: error.message }));

                reject({ message: error.message });
            }
        });
    }

    clear(id = this.id){
        return new Promise(async (resolve, reject) => {
            let was = this.id;

            try{
                if(id !== was)
                    await this.open(id).catch(error => {
                        throw new Error(error.message);
                    });

                for(let table in schema){
                    await this.query(`DELETE FROM ${table}; `).catch(error => {
                        throw new Error(error.message);
                    });
                }

                await this.query(`VACUUM;`).catch(error => {
                    throw new Error(error.message);
                });

                if(id !== was && was)
                    await this.open(was).catch(error => reject({ message: error.message }));

                resolve(true);
            }catch(error){
                if(id !== was && was)
                    await this.open(was).catch(error => reject({ message: error.message }));

                reject({ message: error.message });
            }
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

            this.db.run(`INSERT INTO ${table} (${keys.join(', ')}) VALUES (${keys.map(key => `'${values[key]}'`).join(', ')});`, [], function(error){
                console.log('insert', this);
                error ? reject({ message: error.message }) : resolve(true);
            });
        });
    }

    update(table, values, filter = null){
        return new Promise((resolve, reject) => {
            this.db.run(`UPDATE ${table} SET ${Object.keys(values).map(key => `${key} = '${values[key]}'`).join(', ')}${filter ? ` WHERE ${Object.keys(filter).map(key => `${key}="${filter[key]}"`).join(' AND ')}` : ''};`, [], function(error){
                console.log('update', this);
                error ? reject({ message: error.message }) : resolve(true);
            });
        });
    }

    delete(table, filter = null){
        return new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM ${table}${filter ? ` WHERE ${Object.keys(filter).map(key => `${key}="${filter[key]}"`).join(' AND ')}` : ''};`, [], function(error){
                console.log('delete', this);
                error ? reject({ message: error.message }) : resolve(true);
            });
        });
    }

    query(sql, options = []){
        return new Promise((resolve, reject) => {
            this.db.run(sql, options, function(error){
                console.log('query', this);
                error ? reject({ message: error.message }) : resolve(true);
            });
        });
    }

}