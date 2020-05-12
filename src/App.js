import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductsList from './ProductsList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ProductsList} />
      </Switch>
    </Router>
  );
}

export default App;
