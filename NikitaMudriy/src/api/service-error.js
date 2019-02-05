export default class ServiceError extends Error {

    status = null;
    message = '';
    parameters = null;

    constructor(status, message, parameters){
        super();

        this.status = status;
        this.message = message;
        this.parameters = parameters;
    }

}