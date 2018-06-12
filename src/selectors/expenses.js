//timestamps - (milliseconds)   1000 milli = 1 sec
//positive or negative integers
//January 1st 1970 is day zero - before is neg, after is pos
import moment from 'moment';

//Get visible expenses

export default (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
 
    return startDateMatch && endDateMatch && textMatch; //return if all are true
  }).sort((a,b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};