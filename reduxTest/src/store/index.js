import { combineReducers, createStore } from 'redux';
import { cashReducer } from './cashReducer';
import { customersReducer } from './customerReducer';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customersReducer,
});

export const store = createStore(rootReducer);
