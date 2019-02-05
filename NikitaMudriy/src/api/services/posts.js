import ServiceError from '../service-error';

export default class Posts {

    static RESOURCE = 'posts';
    static OPTIONS = ['id', 'title', 'text', 'date', 'author'];

    constructor(dataProvider){
        this.dataProvider = dataProvider;
    }

    async get(options){
        return {
            status: 200,
            data: await this.dataProvider[options.id ? 'first' : 'all'](Posts.RESOURCE, options.id ? { id: options.id } : null)
        };
    }

    async create(options){
        return {
            status: 200,
            data: await this.dataProvider.insert(Posts.RESOURCE, Object.keys(options).filter(key => Posts.OPTIONS.includes(key)).reduce((option, key) => {
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
            data: await this.dataProvider.update(Posts.RESOURCE, inserts, id)
        };
    }

    async remove(options){
        if(!options.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.delete(Posts.RESOURCE, options)
        };
    }

}