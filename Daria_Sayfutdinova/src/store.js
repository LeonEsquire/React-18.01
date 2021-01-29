import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import reducer from './app/reducers';
import routerMiddleware from "react-router-redux/src/middleware";

const middleware = applyMiddleware(thunk, createLogger({collapsed:true}), routerMiddleware(browserHistory))

export default createStore(reducer, middleware);



