import React from 'react';
import { connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//local component starts with just a declaration
export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile"><h2>Expenses</h2></div>
      <div className="show-for-desktop"><h2>Expense</h2></div>
      <div className="show-for-desktop"><h2>Amount</h2></div>
    </div>
    <div className="list-body">
    {
      props.expenses.length === 0 ? (
        <div className="list-item list-item__message">
          <span>No Expenses</span>
        </div>
      ) : (
        props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
      )
    }
    </div>     
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

