import React from 'react';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt}) => (
<div>
  <h3><Link to={`edit/${id}`}>Description: {description}</Link></h3>
  <p>Amount: {amount} - CreatedAt: {createdAt}</p>
</div>
);

export default ExpenseListItem;

