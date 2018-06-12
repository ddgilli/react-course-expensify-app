import React from 'react';
import { connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { removeExpense } from '../actions/expenses';

//local component starts with just a declaration
export const ExpenseList = (props) => (
  <div>
  {
    props.expenses.length === 0 ? (
      <p>There are no expenses, add some!</p>
    ) : (
      props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
    )
  }
      {}
  </div>
);

//this defines the state fields (already in the store - see configureStore.js
//for specifics) that we want from the store
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

//this actually performs the mapping - the objects in mapStateToProps
//tell the connect function what we want from the store, the second
//argument is the return component - ExpenseList - which we just created.
export default connect(mapStateToProps)(ExpenseList);

//     / mine
      // props.expenses.map((expense) => (
      //   <ExpenseListItem
      //      description={expense.description}
      //      amount={expense.amount}
      //      createdAt={expense.createdAt}
      //   />
      // ))

