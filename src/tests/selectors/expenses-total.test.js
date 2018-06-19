import React from 'react';
import moment from 'moment';
import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test ('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect (result).toBe(0);
});

test ('should correctly add up a single expense', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect (result).toBe(195);
});

test ('should correctly add up all expense', () => {
  const result = selectExpensesTotal(expenses);
  expect (result).toBe(114195);
});
