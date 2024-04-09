import { createSlice } from '@reduxjs/toolkit';
import { CardsTypes } from './types';
import { fetchOrders } from './asyncActions';
import { IOrder } from '../../../models/IOrder';

const initialState: CardsTypes = {
  items: [],
  isLoading: false,
  error: '',
  count: null,
  openOrder: null,
  createOrderModal: false,
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
    createOrder(state, action: { payload: IOrder }) {
      state.items = [action.payload, ...state.items];
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
      state.isLoading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload.items;
      state.count = action.payload.count;
    });
    builder.addCase(fetchOrders.rejected, (state) => {
      state.isLoading = false;
      state.error = 'error.fetchOrders';
    });
  },
});

export const { setOpenProduct, setCreateOrderModal, createOrder, setDeleteOrderItem, deleteOrder } = cardsSlice.actions;

export default cardsSlice.reducer;
