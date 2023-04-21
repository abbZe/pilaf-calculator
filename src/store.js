import { configureStore } from '@reduxjs/toolkit';
import mainReducerSlice from './reducers/mainReducerSlice.js'

export const store = configureStore({
  reducer: {
    mainReducer: mainReducerSlice,
  },
});
