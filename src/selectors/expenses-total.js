export default (expenses) => {
    //first pary destructures expense to only get amount
    //2nd part adds the amounts (reduce)
    return expenses.map((expense) => expense.amount).reduce((sum,value) => sum + value, 0);
  }
   
  //him Version 1 - filter expenses to only get amounts, then use reduce to add them 
  //   return expenses.map((expense) => expense.amount).reduce((sum,value) => {
  //     return sum + value;
  //   }, 0);
  // }
  
    //me
    // const total = expenses.reduce((total, {amount}, index,expenses) => {
    //   return total + amount;
    // }, 0)
    // return parseInt(total);
 // }
//}