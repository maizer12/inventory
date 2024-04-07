import { createSlice } from '@reduxjs/toolkit';
import { CardsTypes } from './types';
import { fetchOrders, fetchOrderProducts } from './asyncActions';
import { IOrder } from '../../../models/IOrder';
import { IProduct } from '../../../models/IProduct';

const initialState: CardsTypes = {
  items: [],
  status: '',
  products: [],
  productsLoading: false,
  openOrder: null,
  createOrderModal: false,
  createProductModal: false,
  deleteOrderItem: null,
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
    setCreateProductModal(state, action: { payload: boolean }) {
      state.createProductModal = action.payload;
    },
    createOrder(state, action: { payload: IOrder }) {
      state.items = [action.payload, ...state.items];
    },
    createProductWidthOrder(state, action: { payload: IProduct }) {
      state.products = [action.payload, ...state.products];
    },
    setDeleteOrderItem(state, action: { payload: IOrder | null }) {
      state.deleteOrderItem = action.payload;
    },
    deleteOrder(state, action: { payload: string }) {
      state.items = state.items.filter((e) => e._id !== action.payload);
      state.deleteOrderItem = null;
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

export const {
  setOpenProduct,
  setCreateOrderModal,
  createOrder,
  createProductWidthOrder,
  setCreateProductModal,
  setDeleteOrderItem,
  deleteOrder,
} = cardsSlice.actions;

export default cardsSlice.reducer;
