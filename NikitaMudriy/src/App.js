import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Layout from './app/layouts/Layout';
// import MainPage from './app/components/Main';
// import About from './app/components/About';
// import Contacts from './app/components/Contacts';
// import PageNotFound from './app/components/PageNotFound';

import MainPage from './app/pages/Main';
import Users from './app/pages/Users';
import User from './app/pages/User';
import PageNotFound from './app/pages/PageNotFound';


const app = document.querySelector('#root');

// localhost:8000/about
ReactDOM.render(
	<BrowserRouter>
		<Layout>
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route path='/users/:userId' component={User} />
                <Route path='/users' component={Users} />
                <Route component={PageNotFound} />
            </Switch>
		</Layout>
	</BrowserRouter>,
app);