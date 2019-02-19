import React from 'react';
import ReactDOM from 'react-dom';
import store from "./app/store";
import { Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';


import Layout from './app/layouts/Layout';
import Users from './app/pages/Users';
import Posts from './app/pages/Posts';
import {  } from "./app/styles/style.css";
import Comments from './app/pages/Comments';
import PageNotFound from './app/pages/PageNotFound';



const app = document.querySelector('#root');


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path = "/" component = {Layout}>
        
        <Route path= "/posts" component = {Posts} />
        <Route path= "/comments" component = {Comments} />
        <Route path= "/users" component = {Users} /> 
        <Route path= "*" component = {PageNotFound} />

      </Route>
    </Router>
</Provider>, app)
