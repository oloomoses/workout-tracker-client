/* eslint-disable react/prop-types */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginContainer from '../container/LoginContainer';
import RegisterContainer from '../container/RegisterContainer';

const LoginOrSignup = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <Redirect to="/login" />
      )}
    />
    <Route exact path="/login" component={LoginContainer} />
    <Route exact path="/signup" component={RegisterContainer} />
  </Switch>
);

export default LoginOrSignup;
