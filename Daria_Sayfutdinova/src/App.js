import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './app/components/Layout';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import MainPage from './app/pages/Main';
import UsersList from './app/pages/UsersPage';
import User from './app/pages/User';
import PageNotFound from './app/pages/PageNotFound';

const root = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={MainPage}/>
			<Route path="users" component={UsersList}>
				<Route path=":userId" component={User}/>
			</Route>
			<Route path="*" component={PageNotFound}/>
		</Route>
	</Router>
</Provider>, root);
