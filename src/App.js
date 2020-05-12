import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import CartButton from './components/CartButton';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart" component={CartPage} />
        <Route exact path="/" component={CartButton} />
      </Switch>
    </Router>
  );
}

export default App;
