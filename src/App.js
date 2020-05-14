import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product/:id" component={DetailsPage} />
        <Route path="/cart" component={CartPage} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
