const defaultState = {
  customers: [],
};

type Customer = {
  name: string;
  id: number;
};

export const customersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return { ...state, customers: [...state.customers, action.payload] };
    case 'REMOVE_CUSTOMER':
      return { ...state, customers: state.customers.filter((item) => item.id !== action.payload) };
    default:
      return state;
  }
};

export const addCustomerAction = (payload: Customer) => ({ type: 'ADD_CUSTOMER', payload });
export const removeCustomerAction = (payload: number) => ({ type: 'REMOVE_CUSTOMER', payload });
