
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, IndexRoute, browserHistory} from "react-router"

import Layout from "./layouts/Layouts";

import Main from "./pages/Main";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";

import "./style/style.css";

import {Provider} from 'react-redux';
import store from './store';


class App extends React.Component {
  render () {
    return (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main} />
      <Route path="users" component={Users} />
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>
);
}
};

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>, document.getElementById("root")
);