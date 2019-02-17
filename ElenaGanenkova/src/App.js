import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';


import MainPage from './app/pages/Main';
import Users from './app/pages/Users';
import User from './app/pages/User';
import PageNotFound from './app/pages/PageNotFound';

import {Provider} from 'react-redux';
import store from './store';



const app = document.querySelector('#root');

class App extends React.Component {
    render () {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Layout}>
                    <IndexRoute component={Main}/>
                    <Route path='users' component={Users}>
                        <Route path=':id' component={User}/>
                    </Route>
                    <Route path='*' component={PageNotFound}/>
                </Route>
            </Router>
        );
    }
}


ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>, app
);


