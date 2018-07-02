import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual( [expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '4'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add the expense', () => {
  const expense = {
    id: '109',
    description: 'Laptopp',
    note: 'test note',
    amount: 29500,
    createdAt: 20000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses,expense]);
 });

 test('should edit the expense', () => {
  const description = 'Gummy bears';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe(description);
});
  
test('should not edit non-existent expense', () => {
  const description = 'ERROR';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '109',
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
  
test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: expenses
  }
  let state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);

  const newExpenses = [expenses[0], expenses[1]];
  const newAction = {
    type: 'SET_EXPENSES',
    expenses: newExpenses
  }
  state = expensesReducer(newExpenses, newAction);
  expect(state).toEqual(newExpenses);
});
  
