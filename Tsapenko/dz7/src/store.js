import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';

import reducer from './reducers/index';

const promise = createPromise({ types: { fulfilled: 'success' } });
const logger = createLogger();
const middleware = applyMiddleware(promise, thunk, logger);

export default createStore(reducer, middleware);