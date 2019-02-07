import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import Layout from './app/layouts/Layout';
/*import MainPage from './app/pages/Main';
import About from './app/components/About';
import Contacts from './app/components/Contacts';
import PageNotFound from './app/pages/PageNotFound';*/

import MainPage from './app/pages/Main';
import Users from './app/pages/Users';
import User from './app/pages/User';
import PageNotFound from './app/pages/PageNotFound';
import Posts from './app/pages/Posts';
import Post from './app/pages/Post';
import Comments from './app/pages/Comments';
import Comment from './app/pages/Comment';


ReactDOM.render (
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={MainPage} />
            <Route path="users" component={Users}>
              <Route path=":userId" component={User}/>
            </Route>
            <Route path="posts" component={Posts}>
                <Route path=":id" component={Post}/>
            </Route>
            <Route path="comments" component={Comments}>
                <Route path=":id" component={Comment}/>
            </Route>

            <Route path="*" component={PageNotFound}/>
        </Route>
    </Router>
    ,document.getElementById("root"));


{/*
<Layout>
    <About/>
    <Contacts/>
</Layout>*/}
