import ServiceError from '../service-error';

export default class Comments {

    static RESOURCE = 'posts';
    static OPTIONS = ['id', 'text', 'date', 'author', 'post'];

    constructor(dataProvider){
        this.dataProvider = dataProvider;
    }

    async get(options){
        return {
            status: 200,
            data: await this.dataProvider[options.id ? 'first' : 'all'](Comments.RESOURCE, options.id ? { id: options.id } : null)
        };
    }

    async create(options){
        return {
            status: 200,
            data: await this.dataProvider.insert(Comments.RESOURCE, Object.keys(options).filter(key => Comments.OPTIONS.includes(key)).reduce((option, key) => {
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
            data: await this.dataProvider.update(Comments.RESOURCE, inserts, id)
        };
    }

    async remove(options){
        if(!options.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.delete(Comments.RESOURCE, options)
        };
    }

}