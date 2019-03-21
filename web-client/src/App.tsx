import React, { Component } from 'react';

import Houses from './components/Houses';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Houses />
        </header>
      </div>
    );
  }
}

export default App;
