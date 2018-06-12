const expensesReducerDefaultState = [];//defaults can be much more verbose

export default (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
    return state.filter(({ id }) => id !== action.id);
//old way    return state.filter((expense) => action.expense.id !== expense.id)
    case 'EDIT_EXPENSE':
      //retrieve expense using id, update field with new value 
      return state.map((expense) => {
        if (expense.id === action.id)
        {
          return {
            ...expense, 
            ...action.updates
          };
         } else {
          return expense;
        };
      });
    default:
      return state;
  }
};

