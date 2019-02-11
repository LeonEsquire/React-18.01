import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store';

import {default as Layout} from 'layouts/default';

import DBsView from 'views/dbs-view';
import UsersView from 'views/users-view';
import PostsView from 'views/posts-view';
import CommentsView from 'views/comments-view';
/*
import DB from 'pages/db';
import Post from 'pages/post';
import Comment from 'pages/comment';
import User from 'pages/user';
*/
const menu = [{
    id: 'index',
    path: '/',
    title: 'Главная'
}, {
    id: 'posts',
    path: '/posts',
    title: 'Посты'
}, {
    id: 'comments',
    path: '/comments',
    title: 'Комментарии'
}, {
    id: 'users',
    path: '/users',
    title: 'Пользователи'
}];

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Layout course='ReactJS' task='Домашнее задание 7' menu={menu}>
            <Switch>
                <Route exact path='/'>
                    <>
                        <p className="lead my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque deserunt dolore eaque esse eveniet illo laboriosam laborum laudantium maiores natus nesciunt qui, quia ratione sequi tempore velit veniam? Facere.</p>
                        <DBsView />
                    </>
                </Route>

                <Route path='/dbs/:db' component={(props) => <DBsView {...props} />} />
                <Route path='/dbs' component={(props) => <DBsView {...props} />} />

                <Route path='/users/:user/comments' component={(props) => <UsersView {...props}><CommentsView /></UsersView>} />
                <Route path='/users/:user/posts' component={(props) => <UsersView {...props}><PostsView /></UsersView>} />
                <Route path='/users/:user' component={(props) => <UsersView {...props} />} />
                <Route path='/users' component={(props) => <UsersView {...props} />} />

                <Route path='/posts/:post/comments' component={(props) => <PostsView {...props}><CommentsView {...props} /></PostsView>} />
                <Route path='/posts/:post' component={(props) => <PostsView {...props} />} />
                <Route path='/posts' component={(props) => <PostsView {...props} />} />

                <Route path='/comments/:comment' component={(props) => <CommentsView {...props} />} />
                <Route path='/comments' component={(props) => <CommentsView {...props} />} />

                <Route>
                    <>
                        <p className="lead my-4">Error 404 <small className="text-muted">page not found</small></p>
                    </>
                </Route>
            </Switch>
        </Layout>
    </BrowserRouter>
</Provider>, document.getElementById('app'));