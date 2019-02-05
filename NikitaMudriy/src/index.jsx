import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import {default as Layout} from 'layouts/default';

import DB from 'pages/db';
import Post from 'pages/post';
import Comment from 'pages/comment';
import User from 'pages/user';
import Empty from 'pages/empty';

const menu = [{
    id: 'home',
    path: '/',
    title: 'Главная'
}, {
    id: 'posts',
    path: '/posts',
    title: 'Посты'
}, {
    id: 'Comments',
    path: '/comments',
    title: 'Комментарии'
}, {
    id: 'Users',
    path: '/users',
    title: 'Пользователи'
}];

let indexRoute = <>
        <p className="lead my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque deserunt dolore eaque esse eveniet illo laboriosam laborum laudantium maiores natus nesciunt qui, quia ratione sequi tempore velit veniam? Facere.</p>
        <DB />
    </>,
    noRoute = <p className="lead my-4">Error 404 <small className="text-muted">page not found</small></p>;

ReactDOM.render(<Router history={browserHistory}>
    <Route path='/' component={(props) => <Layout {...props} course='ReactJS' task='Домашнее задание 5' menu={menu} />}>
        <IndexRoute components={(props) => <Empty {...props}>{indexRoute}</Empty>} />

        <Route path='dbs' component={(props) => <DB {...props}/>} />
        <Route path='dbs/:db' component={(props) => <DB {...props}/>} />

        <Route path='posts' component={(props) => <Post {...props}/>} />
        <Route path='posts/:post' component={(props) => <Post {...props}/>}>
            <Route path='comments' component={Comment} />
        </Route>

        <Route path='comments' component={(props) => <Comment {...props}/>} />
        <Route path='comments/:comment' component={(props) => <Comment {...props}/>} />

        <Route path='users' component={(props) => <User {...props}/>} />
        <Route path='users/:user' component={(props) => <User {...props}/>}>
            <Route path='posts' component={Post} />
            <Route path='comments' component={Comment} />
        </Route>

        <Route path='*' component={(props) => <Empty {...props}>{noRoute}</Empty>} />
    </Route>
</Router>, document.getElementById('app'));