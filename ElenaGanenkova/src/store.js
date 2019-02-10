import { applyMiddleware, createStore } from 'redux';

import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {createPromise} from 'redux-promise-middleware';

import reducer from './app/reducers';

const middleware = applyMiddleware(createPromise(), thunk);

export default createStore(reducer, middleware);