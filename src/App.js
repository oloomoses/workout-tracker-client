import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navigation />

        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
