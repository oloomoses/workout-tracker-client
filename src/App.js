import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginContainer from './container/LoginContainer';
import RegisterContainer from './container/RegisterContainer';
import WorkoutContainer from './container/WorkoutContainer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/signup" component={RegisterContainer} />
          <Route exact path="/workouts" component={WorkoutContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
