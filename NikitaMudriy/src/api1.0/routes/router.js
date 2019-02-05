import {Router} from 'express';

export default function(operations, service){
    const router = new Router();

    for (let operation of operations) {
        router[operation.method](operation.path, async (req, res, next) => {
            const options = {...req.query, ...(operation.method === 'post' || operation.method === 'put' ? req.body : {}), ...req.params};

            let status,
                data;

            try {
                const result = await service[options.method || operation.id](options);

                status = result.status || 200;
                data = result.data;

                res.status(status).send(data);
            } catch (error) {
                status = error.status || 500;
                data = {
                    status: status,
                    error: error.error || 'Server Error'
                };

                return res.status(status).send(data);
            }
        });
    }

    return router;
}