import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Layout from './app/layouts/Layout';
import MainPage from './app/pages/Main';
import Users from './app/pages/Users';
import User from './app/pages/User';
import Posts from './app/pages/Posts';
import PageNotFound from './app/pages/PageNotFound';


const app = document.querySelector('#root');

ReactDOM.render(
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path="/" component={MainPage}/>
				<Route exact path="/users" component={Users}/>
				<Route path="/users/:userId" component={User}/> 
				<Route exact path="/posts" component={Posts}/>
				<Route path="*" component={PageNotFound}/>
			</Switch>
		</Layout>
	</BrowserRouter>,
app);