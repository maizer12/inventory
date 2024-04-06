import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './slices/orderSlice';

const store = configureStore({
  reducer: {
    orderSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
