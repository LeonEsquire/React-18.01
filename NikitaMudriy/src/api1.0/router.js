import express from 'express';
import multer from 'multer';

import DB from './db';

const DB_PATH = 'db',
      DB_ID = 'random';

let uploader = multer(),
    router = express.Router(),
    db = new DB(DB_PATH, DB_ID);

router.get('/dbs', (req, res, next) => {
    let action,
        status;

    if('id' in req.query){
        if('method' in req.query){
            switch(req.query.method){
                case 'open':
                    action = db.open(req.query.id);
                    status = 202;
                    break;
                case 'close':
                    action = db.close(req.query.id);
                    status = 202;
                    break;
                case 'fill':
                    action = db.fill(req.query.id);
                    status = 202;
                    break;
                default:
                    res.status(500).json({ error: `Unknown method "${req.query.method}"` });
                    return;
            }
        }else{
            action = db.getInfo(req.query.id);
            status = 200;
        }
    }else{
        action = db.getList();
        status = 200;
    }

    action.then(result => res.status(status).json(result)).catch(error => res.status(500).json({ error }));
});

router.post('/dbs', uploader.array(), (req, res, next) => {
    if('id' in req.body){
        db.create(req.body.id).then(result => res.status(202).json(result)).catch(error => res.status(500).json({ error }));
    }else{
        res.status(500).json({ error: `Wrong parameters.` });
    }
});

router.put('/dbs', uploader.array(), (req, res, next) => {
    if('oldId' in req.body && 'newId' in req.body){
        db.rename(req.body.oldId, req.body.newId).then(result => res.status(202).json(result)).catch(error => res.status(500).json({ error }));
    }else{
        res.status(500).json({ error: `Wrong parameters.` });
    }
});

router.delete('/dbs', (req, res, next) => {
    if('id' in req.body){
        db.delete(req.body.id).then(result => res.status(202).json(result)).catch(error => res.status(500).json({ error }));
    }else{
        res.status(500).json({ error: `Wrong parameters.` });
    }
});

router.get('/posts', (req, res, next) => {
    let action,
        status;

    if('id' in req.query){
        if('method' in req.query){
            let {method, ...data} = req.query;

            switch(method){
                case 'filter':
                    action = db.all('posts', { filter: data });
                    status = 200;
                    break;
                default:
                    res.status(500).json({ error: `Unknown method "${req.query.method}"` });
                    return;
            }
        }else{
            action = db.get('posts', { filter: {
                    id: req.query.id
                } });
            status = 200;
        }
    }else{
        action = db.all('posts');
        status = 200;
    }

    action.then(result => res.status(status).json(result)).catch(error => res.status(500).json({ error }));
});

router.post('/posts', uploader.array(), (req, res, next) => {
    if('title' in req.body && 'text' in req.body && 'author' in req.body){
        db.insert('posts', { values: req.body }).then(result => res.status(202).json(result)).catch(error => res.status(500).json({ error }));
    }else{
        res.status(500).json({ error: `Wrong parameters.` });
    }
});

router.put('/posts', uploader.array(), (req, res, next) => {
    if('id' in req.body && 'title' in req.body && 'text' in req.body){
        let {id, ...data} = req.body;

        db.update('posts', {
            filter: { id },
            values: data
        }).then(result => res.status(202).json(result)).catch(error => res.status(500).json({ error }));
    }else{
        res.status(500).json({ error: `Wrong parameters.` });
    }
});

router.delete('/posts', (req, res, next) => {
    if('id' in req.body){
        db.remove('posts', { filter: {
            id: req.body.id
        } }).then(result => res.status(202).json(result)).catch(error => res.status(500).json({ error }));
    }else{
        res.status(500).json({ error: `Wrong parameters.` });
    }
});

router.get('/comments', (req, res, next) => {
    let action,
        status;

    if('id' in req.query){
        if('method' in req.query){
            let {method, ...data} = req.query;

            switch(method){
                case 'filter':
                    action = db.all('comments', { filter: data });
                    status = 200;
                    break;
                default:
                    res.status(500).json({ error: `Unknown method "${req.query.method}"` });
                    return;
            }
        }else{
            action = db.get('comments', { filter: {
                    id: req.query.id
                } });
            status = 200;
        }
    }else{
        action = db.all('comments');
        status = 200;
    }

    action.then(result => res.status(status).json(result)).catch(error => res.status(500).json({ error }));
});

router.post('/comments', uploader.array(), (req, res, next) => {
    if('text' in req.body && 'author' in req.body && 'post' in req.body){
        db.insert('comments', { values: req.body }).then(result => res.status(202).json(result)).catch(error => res.status(500).json({ error }));
    }else{
        res.status(500).json({ error: `Wrong parameters.` });
    }
});

router.put('/comments', uploader.array(), (req, res, next) => {
    if('id' in req.body && 'text' in req.body){
        let {id, ...data} = req.body;

        db.update('comments', {
            filter: { id },
            values: data
        }).then(result => res.status(202).json(result)).catch(error => res.status(500).json({ error }));
    }else{
        res.status(500).json({ error: `Wrong parameters.` });
    }
});

router.delete('/comments', (req, res, next) => {
    if('id' in req.body){
        db.remove('comments', { filter: {
            id: req.body.id
        } }).then(result => res.status(202).json(result)).catch(error => res.status(500).json({ error }));
    }else{
        res.status(500).json({ error: `Wrong parameters.` });
    }
});

router.get('/users', (req, res, next) => {
    let action,
        status;

    if('id' in req.query){
        if('method' in req.query){
            let {method, ...data} = req.query;

            switch(method){
                case 'filter':
                    action = db.all('users', { filter: data });
                    status = 200;
                    break;
                default:
                    res.status(500).json({ error: `Unknown method "${req.query.method}"` });
                    return;
            }
        }else{
            action = db.get('users', { filter: {
                id: req.query.id
            } });
            status = 200;
        }
    }else{
        action = db.all('users');
        status = 200;
    }

    action.then(result => res.status(status).json(result)).catch(error => res.status(500).json({ error }));
});

router.post('/users', uploader.array(), (req, res, next) => {
    if('name' in req.body){
        db.insert('users', { values: req.body }).then(result => res.status(202).json(result)).catch(error => res.status(500).json({ error }));
    }else{
        res.status(500).json({ error: `Wrong parameters.` });
    }
});

router.put('/users', uploader.array(), (req, res, next) => {
    if('id' in req.body && 'name' in req.body){
        let {id, ...data} = req.body;

        db.update('users', {
            filter: { id },
            values: data
        }).then(result => res.status(202).json(result)).catch(error => res.status(500).json({ error }));
    }else{
        res.status(500).json({ error: `Wrong parameters.` });
    }
});

router.delete('/users', (req, res, next) => {
    if('id' in req.body){
        db.remove('users', { filter: {
            id: req.body.id
        } }).then(result => res.status(202).json(result)).catch(error => res.status(500).json({ error }));
    }else{
        res.status(500).json({ error: `Wrong parameters.` });
    }
});

export default router;

//db.create('random').then(result => console.log(result)).catch(error => console.log(error));
//db.open('random').then(result => console.log(result)).catch(error => console.log(error));
//db.close('random').then(result => console.log(result)).catch(error => console.log(error));
//db.init('random').then(result => console.log(result)).catch(error => console.log(error));
//db.query(`SELECT name FROM sqlite_master WHERE type='table';`).then(result => console.log(result)).catch(error => console.log(error));

//db.query(`CREATE TABLE users (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT DEFAULT "", date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP);`).then(result => console.log(result)).catch(error => console.log(error));
//db.query(`CREATE TABLE posts (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, title TEXT DEFAULT "", text TEXT DEFAULT "", date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, author INTEGER NOT NULL, FOREIGN KEY (author) REFERENCES users (id) ON DELETE CASCADE ON UPDATE NO ACTION);`).then(result => console.log(result)).catch(error => console.log(error));
//db.query(`CREATE TABLE comments (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, text TEXT DEFAULT "", date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, author INTEGER NOT NULL, post INTEGER NOT NULL, FOREIGN KEY (author) REFERENCES users (id) ON DELETE CASCADE ON UPDATE NO ACTION, FOREIGN KEY (post) REFERENCES posts (id) ON DELETE CASCADE ON UPDATE NO ACTION);`).then(result => console.log(result)).catch(error => console.log(error));

db.fill('random').then(result => console.log(result)).catch(error => console.log(error));