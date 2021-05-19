import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LoginContainer from './container/LoginContainer';
import RegisterContainer from './container/RegisterContainer';
import WorkoutContainer from './container/WorkoutContainer';

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
          <Route path="/workouts" component={WorkoutContainer} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
