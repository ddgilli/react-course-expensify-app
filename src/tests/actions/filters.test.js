import moment from 'moment';
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should set sortBy field to date action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'});
});

test('should set sortBy field to amount action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'});
});

test('should set text filter to passed in value text action object', () => {
  const text = 'Something in'
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT',
    text
  });
});

test('should set text filter to default value text action object', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT',
    text: ''
  });
});