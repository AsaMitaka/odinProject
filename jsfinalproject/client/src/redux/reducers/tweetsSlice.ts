import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tweets: [],
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {},
});

export default tweetsSlice.reducer;
