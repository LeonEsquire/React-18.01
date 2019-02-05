export default class Service {

    static METHOD_GET = 'get';
    static METHOD_POST = 'post';
    static METHOD_PUT = 'put';
    static METHOD_DELETE = 'delete';

    constructor(url, resource){
        this.url = url;
        this.resource = resource;
    }

    request(method = Service.METHOD_GET, data = null){
        let parameters = '',
            options = {
                method: method
            };

        if([Service.METHOD_POST, Service.METHOD_PUT].indexOf(method) !== -1 && data) {
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
                let contentType = result.headers.get("content-type");

                if(contentType && contentType.includes("application/json")) {
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

}