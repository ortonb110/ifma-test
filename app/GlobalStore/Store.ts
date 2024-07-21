import { configureStore } from '@reduxjs/toolkit';
import AppContext from './Features/CreateSlice';

export const store = configureStore({
  reducer: {
    // reducerName: reducerName,
    movies: AppContext,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
