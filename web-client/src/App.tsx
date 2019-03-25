import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MenuBar from './components/navigation/MenuBar';
import Home from './pages/Home';
import Account from './pages/Account';
import Rentals from './pages/Rentals';
import House from './pages/House';

import './App.css';

const App = () => {
  return (
      <Router>
        <MenuBar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/houses/:id" component={House} />
        <Route path="me" component={Account} />
        <Route path="me/rentals" component={Rentals} />
      </Router>
  )
}

export default App;
