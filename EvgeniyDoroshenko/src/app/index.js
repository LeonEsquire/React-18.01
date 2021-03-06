import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import PageNotFound from "./pages/PageNotFound";
import Users from "./pages/Users";
import User from "./pages/User";

import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Comments from "./pages/Comments";
import Comment from "./pages/Comment";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main} />
      <Route path="users" component={Users}>
        <Route path=":userId" component={User} />
      </Route>
      <Route path="posts" component={Posts}>
        <Route path=":postId" component={Post} />
      </Route>
      <Route path="comments" component={Comments}>
        <Route path=":commentId" component={Comment} />
      </Route>
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>,
  document.getElementById("root")
);
