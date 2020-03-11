import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Profile from "./containers/Profile";
import Home from "./containers/Home";
import AssignmentList from "./containers/AssignmentList";
import AssignmentDetail from "./containers/AssignmentDetail";
import AssignmentCreate from "./containers/AssignmentCreate";


const BaseRouter = () => (
  <Hoc>
    <Route exact path="/" component={Home} />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/signup/" component={Signup} />
    <Route exact path="/profile/:id" component={Profile} />
    <Route exact path="/create/" component={AssignmentCreate} />
    <Route exact path="/assignments/" component={AssignmentList} />
    <Route exact path="/assignments/:id" component={AssignmentDetail} />
  </Hoc>
);

export default BaseRouter;
