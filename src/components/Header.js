import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Expensify</h1>  
    <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
    <li><NavLink to="/create" activeClassName="is-active">Add Expense</NavLink></li>
  </div>
);

export default Header;