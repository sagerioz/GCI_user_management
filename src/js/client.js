import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";

import Favorites from "./pages/Favorites";
import Users from "./pages/Users";
import Layout from "./pages/Layout";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
// <Route path="edit_user/:id" component={EditUser}></Route>
// <Route name="edit_user" path="/:id" handler={EditUser} />


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Users}></IndexRoute>
      <Route path="favorites" component={Favorites}></Route>
      <Route path="add_user" component={AddUser}></Route>
      // <Route path="edit_user/:editId" component={EditUser}></Route>
      <Route name="edit_user" path="/:editId" component={EditUser} />


    </Route>
  </Router>,
app);
