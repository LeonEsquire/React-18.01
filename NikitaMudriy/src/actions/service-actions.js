export default class ServiceActions {

    static METHOD_GET = 'get';
    static METHOD_POST = 'post';
    static METHOD_PUT = 'put';
    static METHOD_DELETE = 'delete';

    static TYPE_GET = 'GET';
    static TYPE_ADD = 'ADD';
    static TYPE_EDIT = 'EDIT';
    static TYPE_DELETE = 'DELETE';

    constructor(url, resource){
        this.url = url;
        this.resource = resource;
    }

    request(method = ServiceActions.METHOD_GET, data = null){
        let parameters = '',
            options = {
                method: method
            };

        if([ServiceActions.METHOD_POST, ServiceActions.METHOD_PUT].indexOf(method) !== -1 && data) {
            options.headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            options.body = JSON.stringify(data);
        }else if(data){
            parameters = `?${Object.keys(data).map(key => key + '=' + data[key]).join('&')}`;
        }

        return fetch(`${this.url}/${this.resource}${parameters}`, options).then(result => {
            if(result.ok) {
                return result.json();
            }else{
                let contentType = result.headers.get('Content-Type');

                if(contentType && contentType.includes('application/json')) {
                    return result.json().then(error => {
                        throw new Error(`${result.statusText}: ${error.error === {} ? 'unknown error' : error.error}`);
                    });
                }else{
                    return result.text().then(error => {
                        throw new Error(`${result.statusText}: ${error}`);
                    });
                }
            }
        });
    }

    get RESOURCE() {
        return this.resource.toUpperCase();
    }

    getType(...type){
        return [this.RESOURCE, ...type].join('_');
    }

    get(data = null){
        return {
            type: this.getType(ServiceActions.TYPE_GET),
            payload: this.request(ServiceActions.METHOD_GET, data)
        };
    }

    add(data){
        return {
            type: this.getType(ServiceActions.TYPE_ADD),
            payload: this.request(ServiceActions.METHOD_POST, data)
        };
    }

    edit(data){
        return {
            type: this.getType(ServiceActions.TYPE_EDIT),
            payload: this.request(ServiceActions.METHOD_PUT, data)
        };
    }

    delete(data){
        return {
            type: this.getType(ServiceActions.TYPE_DELETE),
            payload: this.request(ServiceActions.METHOD_DELETE, data)
        };
    }

    method(method, data = {}){
        return {
            type: this.getType(method.toUpperCase()),
            payload: this.request(ServiceActions.METHOD_GET, {...data, method})
        };
    }

}