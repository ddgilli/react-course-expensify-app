import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ButtonModal from './ButtonModal';

export class EditExpensePage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      idToRemove: undefined
    }
  }

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemoveClick = () => {  
    this.setState(() => ({
      idToRemove: this.props.expense.id
    }));
  }

  removeExpense = () => {
    this.props.startRemoveExpense( {id: this.props.expense.id} );
    this.setState(() => ({
      idToRemove: undefined
      }));
    this.props.history.push('/');
  }

  onCancel = () => {
    this.setState(() => ({
      idToRemove: undefined
    }));
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container"> 
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm className="form" onSubmit={this.onSubmit} expense={this.props.expense} />
          <button className="button button--secondary" onClick={this.onRemoveClick}>Remove Expense</button>    
          <ButtonModal 
            className="modal"
            idToRemove={this.state.idToRemove} 
            onCancel={this.onCancel}
            removeExpense={this.removeExpense}
          />
          
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch, props) => ({    
  startRemoveExpense: ( data ) => dispatch(startRemoveExpense(data)),
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
}); 


const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);