import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import MainPage from './MainPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </Router>
  );
}

export default App;
