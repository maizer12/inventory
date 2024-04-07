import { createSlice } from '@reduxjs/toolkit';
import { CardsTypes } from './types';
import { fetchOrders, fetchOrderProducts } from './asyncActions';
import { IOrder } from '../../../models/IOrder';

const initialState: CardsTypes = {
  items: [],
  status: '',
  products: [],
  productsLoading: false,
  openOrder: {
    _id: '66124faea12a269e4a31626f',
    title: 'заказ 45',
    products: [],
    date: new Date(),
    amountUSD: 0,
    amountUAH: 0,
    createdAt: '2024-04-07T07:47:58.372Z',
    updatedAt: '2024-04-07T07:47:58.372Z',
    __v: 0,
    productCount: 0,
  },
  createOrderModal: false,
};

const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState,
  reducers: {
    setOpenProduct(state, action: { payload: IOrder | null }) {
      state.openOrder = action.payload;
    },
    setCreateOrderModal(state, action: { payload: boolean }) {
      state.createOrderModal = action.payload;
    },
    createOrder(state, action: { payload: IOrder }) {
      state.items = [action.payload, ...state.items];
    },
  },
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
      state.products = [];
      state.productsLoading = true;
    });
    builder.addCase(fetchOrderProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.productsLoading = false;
    });
    builder.addCase(fetchOrderProducts.rejected, (state) => {
      state.productsLoading = false;
    });
  },
});

export const { setOpenProduct, setCreateOrderModal, createOrder } = cardsSlice.actions;

export default cardsSlice.reducer;
