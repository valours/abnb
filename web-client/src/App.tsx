import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MenuBar from './components/navigation/MenuBar';
import Home from './pages/Home';
import Account from './pages/Account';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <MenuBar/>
        <Route path="/" component={Home}/>
        <Route path="me" component={Account} />
      </Router>
    );
  }
}

export default App;
