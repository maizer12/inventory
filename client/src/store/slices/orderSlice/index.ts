import { createSlice } from '@reduxjs/toolkit';
import { CardsTypes } from './types';
import { fetchOrders, fetchOrderProducts } from './asyncActions';

const initialState: CardsTypes = {
  items: [],
  status: '',
  products: [],
  productsLoading: false,
};

const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchOrders.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.status = '';
      state.items = action.payload;
    });
    builder.addCase(fetchOrders.rejected, (state) => {
      state.status = 'err';
    });
    builder.addCase(fetchOrderProducts.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchOrderProducts.fulfilled, (state, action) => {
      state.status = '';
      state.products = action.payload;
    });
    builder.addCase(fetchOrderProducts.rejected, (state) => {
      state.productsLoading = false;
    });
  },
});

//export const {} = cardsSlice.actions;

export default cardsSlice.reducer;
