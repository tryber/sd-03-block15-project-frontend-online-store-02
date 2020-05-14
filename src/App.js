import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import Detalhes from './pages/DetalhesPlus';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/cart" component={CartPage} />
        <Router path="/detalhes">
          <Detalhes data-testid="product-detail-add-to-cart" />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
