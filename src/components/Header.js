import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <div>
    <h1>Expensify</h1>  
    <li><NavLink to="/dashboard" activeClassName="is-active" >Dashboard</NavLink></li>
    <li><NavLink to="/create" activeClassName="is-active">Add Expense</NavLink></li>
    <button onClick={startLogout}>Logout</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);