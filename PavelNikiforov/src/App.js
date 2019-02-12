import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {Provider} from 'react-redux'

import Layout from './app/layout/Layout'
import MainPage from './app/pages/Main'
import Users from './app/pages/Users'
import User from './app/pages/User'
import Posts from './app/pages/Posts'
import Post from './app/pages/Post'
import Comments from './app/pages/Comments'
import SingleComment from './app/pages/Comment'
import Error404 from './app/pages/404'
import store from './app/stores/store'

import './app/scss/style.scss'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Layout}>
                        <IndexRoute component={MainPage}/>
                        <Route path="users" component={Users}>
                            <Route path=":userId" component={User}/>
                        </Route>
                        <Route path="posts" component={Posts}>
                            <Route path=":postId" component={Post}/>
                        </Route>
                        <Route path="comments" component={Comments}>
                            <Route path=":commentId" component={SingleComment}/>
                        </Route>
                        <Route path="*" component={Error404}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))