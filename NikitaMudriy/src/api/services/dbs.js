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

    async add(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        await this.dataProvider.create(filtered.id);

        return {
            status: 200,
            data: await this.dataProvider.get(filtered.id)
        };
    }

    async edit(options){
        let filtered = this.constructor.filter(options);

        if(!options.oldId || !options.newId)
            throw new ServiceError(500, `Wrong parameters.`, options);

        await this.dataProvider.rename(options.oldId, options.newId);

        return {
            status: 200,
            data: await this.dataProvider.get(options.newId)
        };
    }

    async delete(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        await this.dataProvider.remove(filtered.id);

        return {
            status: 200,
            data: { id: filtered.id }
        };
    }

    async exists(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        let exists = await this.dataProvider.exists(filtered.id);

        return {
            status: 200,
            data: exists ? await this.dataProvider.get(filtered.id) : exists
        };
    }

    async open(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        await this.dataProvider.open(filtered.id);

        return {
            status: 200,
            data: await this.dataProvider.get(filtered.id)
        };
    }

    async close(options){
        let filtered = this.constructor.filter(options);

        let close = await this.dataProvider.close(filtered.id ? filtered.id : null);

        return {
            status: 200,
            data: filtered.id ? await this.dataProvider.get(filtered.id) : close
        };
    }

    async init(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        await this.dataProvider.init(filtered.id);

        return {
            status: 200,
            data: await this.dataProvider.get(filtered.id)
        };
    }

    async drop(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        await this.dataProvider.drop(filtered.id);

        return {
            status: 200,
            data: await this.dataProvider.get(filtered.id)
        };
    }

    async fill(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        await this.dataProvider.fill(filtered.id);

        return {
            status: 200,
            data: await this.dataProvider.get(filtered.id)
        };
    }

    async clear(options){
        let filtered = this.constructor.filter(options);

        if(!filtered.id)
            throw new ServiceError(500, `Wrong parameters.`, options);

        await this.dataProvider.clear(filtered.id);

        return {
            status: 200,
            data: await this.dataProvider.get(filtered.id)
        };
    }

}