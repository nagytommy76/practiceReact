import Navbar from './components/PageComponents/Navbar.jsx'
import Footer from './components/PageComponents/Footer'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar title="My First React App"></Navbar>
      <Footer />
    </Router>
  );
}

export default App;
