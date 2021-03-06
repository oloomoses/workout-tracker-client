import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RegisterContainer from '../container/RegisterContainer';
import LoginContainer from '../container/LoginContainer';

import WorkoutContainer from '../container/WorkoutContainer';
import Spinner from './Spinner';
import TrackitContainer from '../container/TrackitContainer';

const Main = () => {
  const token = useSelector((state) => state.signup.token || state.login.token);
  const loading = useSelector((state) => state.signup.loading || state.login.loading);

  if (loading) {
    return <Spinner />;
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
      <Route
        exact
        path="/workouts"
        render={() => (
          !token
            ? <Redirect to="/login" />
            : <WorkoutContainer />
        )}
      />
      <Route
        exact
        path="/workouts/:id"
        render={() => (
          !token
            ? <Redirect to="/login" />
            : <TrackitContainer />
        )}
      />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/signup" component={RegisterContainer} />

    </Switch>
  );
};

export default Main;
