import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import Contacts from "./app/components/Contacts";
import Main from "./app/components/Main";
import Layout from "./app/Layouts/layout";
import About from "./app/components/About";
import pageNotFound from "./app/components/pageNotFound";


const app =  document.querySelector("#root")

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="*" component={pageNotFound}/>
        </Route>
    </Router>,
    app);