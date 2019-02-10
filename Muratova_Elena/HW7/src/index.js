
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, IndexRoute, browserHistory} from "react-router"

import Layout from "./layouts/Layouts";

import Main from "./pages/Main";
import Users from "./pages/Users";
import User from "./pages/User";
import PageNotFound from "./pages/PageNotFound";

import "./style/style.css";

import {Provider} from 'react-redux';
import store from './store';



ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main} />
      <Route path="users" component={Users}>
        <Route path=":userId" component={User}/>
      </Route>
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>
  </Provider>,
  document.getElementById("root")
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import store from './store';

// import Layout from './components/Layout';

// const app = document.getElementById('root');


