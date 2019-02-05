import ServiceError from '../service-error';

export default class DBs {

    constructor(dataProvider){
        this.dataProvider = dataProvider;
    }

    async exists(options){
        if(!options.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.exists(options.id)
        };
    }

    async get(options){
        return {
            status: 200,
            data: await this.dataProvider.get(options.id ? options.id : null)
        };
    }

    async create(options){
        if(!options.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.create(options.id)
        };
    }

    async edit(options){
        if(!options.oldId || !options.newId)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.rename(options.oldId, options.newId)
        };
    }

    async remove(options){
        if(!options.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.remove(options.id)
        };
    }

    async open(options){
        if(!options.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.open(options.id)
        };
    }

    async close(options){
        return {
            status: 200,
            data: await this.dataProvider.close(options.id ? options.id : null)
        };
    }

    async init(options){
        if(!options.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.init(options.id)
        };
    }

    async drop(options){
        if(!options.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.drop(options.id)
        };
    }

    async clear(options){
        if(!options.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.clear(options.id)
        };
    }

    async fill(options){
        if(!options.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.fill(options.id)
        };
    }

}