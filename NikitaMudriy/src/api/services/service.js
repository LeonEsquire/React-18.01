import ServiceError from '../service-error';

export default class Service {

    static OPTIONS = ['id'];

    static get resource(){
        return this.name.toLowerCase();
    }

    static filter(options){
        return Object.keys(options).filter(key => this.OPTIONS.includes(key)).reduce((option, key) => {
            option[key] = options[key];
            return option;
        }, {});
    }

    constructor(dataProvider){
        this.dataProvider = dataProvider;
    }

    async get(options){
        let filtered = this.constructor.filter(options);

        return {
            status: 200,
            data: await this.dataProvider[filtered.id ? 'first' : 'all'](this.constructor.resource, filtered.id ? { id: filtered.id } : null)
        };
    }

    async add(options){
        let filtered = this.constructor.filter(options);

        await this.dataProvider.insert(this.constructor.resource, filtered);

        return {
            status: 200,
            data: await this.dataProvider.first(this.constructor.resource, { id: filtered.id })
        };
    }

    async edit(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        let {id, ...inserts} = filtered;

        return {
            status: 200,
            data: await this.dataProvider.update(this.constructor.resource, inserts, id)
        };
    }

    async delete(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.delete(this.constructor.resource, filtered)
        };
    }

}