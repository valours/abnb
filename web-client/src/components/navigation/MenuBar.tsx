import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/me">My Account</Link>
    <Link to="/me/houses">My houses</Link>
    <Link to="/me/rentals">My rentals</Link>
  </div>
)

export default MenuBar;