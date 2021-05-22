import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import WorkoutContainer from '../container/WorkoutContainer';
import LoginOrSignup from './LoginOrSignup';

const Main = () => {
  const token = useSelector((state) => state.token);

  if (!token) {
    return <LoginOrSignup token={token} />;
  }
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          !token
            ? <Redirect to="/login" />
            : <Redirect to="/workouts" />
        )}
      />
      <Route exact path="/workouts" component={WorkoutContainer} />
    </Switch>
  );
};

export default Main;
