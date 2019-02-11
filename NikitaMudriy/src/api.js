import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import router from './api/router';
import DB from './api/db';

const PORT = process.env.PORT || 3000,
      HEADERS = [
          ['Access-Control-Allow-Origin', '*'],
          ['Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept']
      ],
      PATH = '/',
      ENDPOINTS = {
        dbs: [
            {id: 'get', path: ['[/]?', '.:method(exists|open|close|init|drop|fill|clear)'], method: 'get'},
            {id: 'add', path: ['[/]?'], method: 'post'},
            {id: 'edit', path: ['[/]?'], method: 'put'},
            {id: 'delete', path: ['[/]?'], method: 'delete'},

            {id: 'get', path: ['/:id', '/:id.:method(exists|open|close|init|drop|fill|clear)'], method: 'get'},
            {id: 'edit', path: ['/:id'], method: 'put'},
            {id: 'delete', path: ['/:id'], method: 'delete'}
        ],
        users: [
            {id: 'get', path: ['[/]?', '.:method(login|logout)'], method: 'get'},
            {id: 'add', path: ['[/]?', '.:method(register)'], method: 'post'},
            {id: 'edit', path: ['[/]?'], method: 'put'},
            {id: 'delete', path: ['[/]?'], method: 'delete'},

            {id: 'get', path: ['/:id', '/:id.:method(login|logout)'], method: 'get'},
            {id: 'edit', path: ['/:id'], method: 'put'},
            {id: 'delete', path: ['/:id'], method: 'delete'}
        ],
        posts: [
            {id: 'get', path: ['[/]?'], method: 'get'},
            {id: 'add', path: ['[/]?'], method: 'post'},
            {id: 'edit', path: ['[/]?'], method: 'put'},
            {id: 'delete', path: ['[/]?'], method: 'delete'},

            {id: 'get', path: ['/:id'], method: 'get'},
            {id: 'edit', path: ['/:id'], method: 'put'},
            {id: 'delete', path: ['/:id'], method: 'delete'}
        ],
        comments: [
            {id: 'get', path: ['[/]?'], method: 'get'},
            {id: 'add', path: ['[/]?'], method: 'post'},
            {id: 'edit', path: ['[/]?'], method: 'put'},
            {id: 'delete', path: ['[/]?'], method: 'delete'},

            {id: 'get', path: ['/:id'], method: 'get'},
            {id: 'edit', path: ['/:id'], method: 'put'},
            {id: 'delete', path: ['/:id'], method: 'delete'}
        ]
      },
      server = express(),
      db = new DB('db', 'default');

server.use((req, res, next) => {
    HEADERS.map(header => res.header(...header));
    next();
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser());

for(let resource in ENDPOINTS){
    server.use(`${PATH}${resource}`, router(ENDPOINTS[resource], new (require(`./api/services/${resource}`).default)(db)));
}

server.use((req, res, next) => {
    res.status(404).send({ error: 'Not found' });
});

server.use((err, req, res, next) => {
    res.status(err.status || 500).send({ error: 'Server error' });
});

server.listen(PORT, error => error ? console.log(error) : console.log(`express starts on ${PORT}`));