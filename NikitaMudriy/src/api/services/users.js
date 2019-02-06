import Service from './service';

export default class Users extends Service {

    static OPTIONS = ['id', 'name', 'date'];

    async register(options){
        let filtered = this.constructor.filter(options);

        return await this.create(filtered);
    }

    async login(options){
        let filtered = this.constructor.filter(options);

        return {
            status: 200,
            data: { message: 'login', options }
        };
    }

    async logout(options){
        let filtered = this.constructor.filter(options);

        return {
            status: 200,
            data: { message: 'logout', options }
        };
    }

}