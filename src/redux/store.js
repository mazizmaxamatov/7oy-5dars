import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import { postApi } from './getPosts';
import { getMe } from './getMe';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [postApi.reducerPath]: postApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),


});




