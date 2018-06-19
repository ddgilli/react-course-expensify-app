import React from 'react';
import { connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense ' : 'expenses ';
  const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (

   <div>  
    <h1>Viewing {expenseCount} {expenseWord} with a total of {formattedTotal}</h1>
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