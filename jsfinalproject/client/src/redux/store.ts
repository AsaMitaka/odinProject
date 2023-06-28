import { configureStore } from '@reduxjs/toolkit';
import tweetsReducer from './reducers/tweetsSlice';

const store = configureStore({
  tweets: tweetsReducer,
});

export default store;
