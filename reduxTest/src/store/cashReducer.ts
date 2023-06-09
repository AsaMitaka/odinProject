const defaultState = {
  cash: 0,
};

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CASH':
      return { ...state, cash: state.cash + action.payload };
    case 'GET_CASH':
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

export const addCashAction = (payload: number) => ({ type: 'ADD_CASH', payload });
export const getCashAction = (payload: number) => ({ type: 'GET_CASH', payload });
