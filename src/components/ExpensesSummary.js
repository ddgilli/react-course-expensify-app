import React from 'react';
import { connect} from 'react-redux';
import { Link } from  'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense ' : 'expenses ';
  const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (

  <div className="page-header">     
    <div className="content-container">
      <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedTotal}</span></h1>
      <div className="page-header__actions">
        <Link className="button" to="/create">Add Expense</Link>
      </div>
    </div>
  </div>
   
  )};

//this defines the state fields (already in the store - see configureStore.js
//for specifics) that we want from the store
const mapStateToProps = (state) => {
   {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
      expenseCount: visibleExpenses.length,
      expensesTotal: selectExpensesTotal(visibleExpenses)
    }
  };
};

//this actually performs the mapping - the objects in mapStateToProps
//tell the connect function what we want from the store, the second
//argument is the return component - ExpensesSummary - which we just created.
export default connect(mapStateToProps)(ExpensesSummary);