export default class Comments {

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

}