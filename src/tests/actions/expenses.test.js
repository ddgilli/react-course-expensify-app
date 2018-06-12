import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import moment from 'moment';

test('should setup remove expense object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
}); 

test('should setup editing expense object', () => {
  const action = editExpense('123abc', {note: 'New note object', description: 'new expense'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {note: 'New note object', description: 'new expense'}
  });
}); 

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'new expense', 
    amount: 1000,
    createdAt: 5000,
    note: 'new note'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',

    expense: {...expenseData,
    id: expect.any(String) }
  });
}); 

test('should setup add expense action object with default values', () => {
  const expenseData = {}
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '', 
      note: '', 
      amount: 0, 
      createdAt: 0,
      id: expect.any(String)
    }
  });
}); 