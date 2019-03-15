import React, {useState} from 'react';
import {Router, Route, browserHistory, IndexRoute, hashHistory} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Layout/Layout";
import MainPage from './pages/MainPage';
import Users from './pages/Users';
import PageNotFound from './pages/PageNotFound';


const App = props => (
    <Router history={browserHistory} >
        <Route path="/" component={Layout} >
            <IndexRoute component={MainPage}/>
            <Route path="users" component={Users}/>
            <Route path="*" component={PageNotFound}/>
        </Route>
    </Router>
);


export  default App;
