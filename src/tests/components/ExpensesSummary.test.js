import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test('should render ExpensesSummary correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={123.45}/>);
  expect(wrapper).toMatchSnapshot();
})

test('should reflect expenses length correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={22} expenseTotal={123456789}/>);
  expect(wrapper).toMatchSnapshot();
})


//Viewing ${props.expenses.length} expenses with a total of $1