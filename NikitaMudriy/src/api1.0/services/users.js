export default class Users {

    constructor(dataProvider){
        this.dataProvider = dataProvider;
    }

    async get(options){
        return {
            status: 200,
            data: { message: 'get', options }
        };
    }

    async register(options){
        return {
            status: 200,
            data: { message: 'register', options }
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

    async login(options){
        return {
            status: 200,
            data: { message: 'login', options }
        };
    }

    async logout(options){
        return {
            status: 200,
            data: { message: 'logout', options }
        };
    }

}