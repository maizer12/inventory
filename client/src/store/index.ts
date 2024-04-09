import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './slices/orderSlice';
import productSlice from './slices/productSlice';
import optionsSlice from './slices/optionsSlice';

const store = configureStore({
  reducer: {
    orderSlice,
    productSlice,
    optionsSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
