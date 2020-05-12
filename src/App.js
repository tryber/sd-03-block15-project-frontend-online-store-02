import React from 'react';
import './App.css';
import * as api from './services/api';

function App() {
  console.log(api.getCategories());
  return (
    <div className="App">
      <h1>Front-end Online Store</h1>
    </div>
  );
}

export default App;
