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

    open(id = this.id){

    }

}