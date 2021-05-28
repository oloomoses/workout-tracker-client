import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Router>
        <Navigation />

        <Main />
      </Router>
    </div>
  );
}

export default App;
