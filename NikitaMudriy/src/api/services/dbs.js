import Service from './service';
import ServiceError from '../service-error';

export default class DBs extends Service {

    async get(options){
        let filtered = this.constructor.filter(options);

        return {
            status: 200,
            data: await this.dataProvider.get(filtered.id ? filtered.id : null)
        };
    }

    async create(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.create(filtered.id)
        };
    }

    async edit(options){
        let filtered = this.constructor.filter(options);

        if(!options.oldId || !options.newId)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.rename(options.oldId, options.newId)
        };
    }

    async remove(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.remove(filtered.id)
        };
    }

    async exists(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.exists(filtered.id)
        };
    }

    async open(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.open(filtered.id)
        };
    }

    async close(options){
        let filtered = this.constructor.filter(options);

        return {
            status: 200,
            data: await this.dataProvider.close(filtered.id ? filtered.id : null)
        };
    }

    async init(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.init(filtered.id)
        };
    }

    async drop(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.drop(filtered.id)
        };
    }

    async fill(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.fill(filtered.id)
        };
    }

    async clear(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        return {
            status: 200,
            data: await this.dataProvider.clear(filtered.id)
        };
    }

}