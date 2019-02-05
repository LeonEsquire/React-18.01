export default {
    users: {
        fields: {
            id: 'INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT',
            name: 'TEXT DEFAULT ""',
            date: 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP'
        },
        keys: [

        ]
    },
    posts: {
        fields: {
            id: 'INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT',
            title: 'TEXT DEFAULT ""',
            text: 'TEXT DEFAULT ""',
            date: 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP',
            author: 'INTEGER NOT NULL'
        },
        keys: [
            'FOREIGN KEY (author) REFERENCES users (id) ON DELETE CASCADE ON UPDATE NO ACTION'
        ]
    },
    comments: {
        fields: {
            id: 'INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT',
            text: 'TEXT DEFAULT ""',
            date: 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP',
            author: 'INTEGER NOT NULL',
            post: 'INTEGER NOT NULL'
        },
        keys: [
            'FOREIGN KEY (author) REFERENCES users (id) ON DELETE CASCADE ON UPDATE NO ACTION',
            'FOREIGN KEY (post) REFERENCES posts (id) ON DELETE CASCADE ON UPDATE NO ACTION'
        ]
    }
};