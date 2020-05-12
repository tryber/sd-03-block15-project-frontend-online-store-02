import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductsSearch from './ProductsSearch';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ProductsSearch} />
      </Switch>
    </Router>
  );
}

export default App;
