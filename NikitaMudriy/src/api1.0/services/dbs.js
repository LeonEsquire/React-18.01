export default class DBs {

    constructor(dataProvider){
        this.dataProvider = dataProvider;
    }

    async get(options){
        return {
            status: 200,
            data: { message: 'get', options }
        };
    }

    async create(options){
        return {
            status: 200,
            data: { message: 'create', options }
        };
    }

    async edit(options){
        return {
            status: 200,
            data: { message: 'edit', options }
        };
    }

    async remove(options){
        return {
            status: 200,
            data: { message: 'remove', options }
        };
    }

    async init(options){
        return {
            status: 200,
            data: { message: 'init', options }
        };
    }

    async clear(options){
        return {
            status: 200,
            data: { message: 'clear', options }
        };
    }

    async fill(options){
        return {
            status: 200,
            data: { message: 'fill', options }
        };
    }

    async open(options){
        return {
            status: 200,
            data: { message: 'open', options }
        };
    }

    async close(options){
        return {
            status: 200,
            data: { message: 'close', options }
        };
    }

}