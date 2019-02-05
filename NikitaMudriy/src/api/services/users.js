import ServiceError from '../service-error';

export default class Users {

    static RESOURCE = 'users';
    static OPTIONS = ['id', 'name', 'date'];

    constructor(dataProvider){
        this.dataProvider = dataProvider;
    }

    async get(options){
        return {
            status: 200,
            data: await this.dataProvider[options.id ? 'first' : 'all'](Users.RESOURCE, options.id ? { id: options.id } : null)
        };
    }

    async register(options){
        return {
            status: 200,
            data: await this.dataProvider.insert(Users.RESOURCE, Object.keys(options).filter(key => Users.OPTIONS.includes(key)).reduce((option, key) => {
                option[key] = options[key];
                return option;
            }, {}))
        };
    }

    async edit(options){
        if(!options.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        let {id, ...inserts} = options;

        return {
            status: 200,
            data: await this.dataProvider.update(Users.RESOURCE, inserts, id)
        };
    }

    async remove(options){
        if(!options.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.delete(Users.RESOURCE, options)
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