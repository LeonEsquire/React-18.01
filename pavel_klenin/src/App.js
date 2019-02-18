import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import store from './app/store/store';

import Developer from './app/components/Developer';
import Layout from './app/layouts/Layout';

import Main from './app/pages/Main';
import Posts from './app/pages/Posts';
import PostCard from './app/pages/PostCard';
import Comments from './app/pages/Comments';
import Users from './app/pages/Users';
import UserCard from './app/pages/UserCard';
import PageNotFound from './app/pages/PageNotFound';

class App extends React.Component {
    render () {
        const developer = new Developer();
        developer.showDev();

        return (
            <Router history={browserHistory}>
                <Route path='/' component={Layout}>
                    <IndexRoute component={Main}/>
                    <Route path='posts' component={Posts}>
                        <Route path=':postID' component={PostCard}/>
                    </Route>
                    <Route path='comments' component={Comments}/>
                    <Route path='users' component={Users}>
                        <Route path=':userID' component={UserCard}/>
                    </Route>
                    <Route path='*' component={PageNotFound}/>
                </Route>
            </Router>
        );
    }
}

const app = document.querySelector('#root');

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>, app
);


