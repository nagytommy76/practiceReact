import React, { Suspense } from 'react'
import Navbar from './components/PageComponents/Navbar'
import Footer from './components/PageComponents/Footer'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Welcome = React.lazy(() => import('./components/Views/Welcome'))
const Products = React.lazy(() => import('./components/Views/Products/Products'))

function App() {
  return (
    <Router>
      <Navbar title="My First React App"></Navbar>
      <Switch>
        <Suspense fallback={<h1>Loading....</h1>}>
          <Route path='/' exact component={Welcome}/>
          <Route path='/products' component={Products}/>
        </Suspense>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
