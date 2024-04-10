import { createSlice } from '@reduxjs/toolkit';
import { OrdersTypes } from './types';
import { fetchOrders } from './asyncActions';
import { IOrder } from '../../../models/IOrder';

const initialState: OrdersTypes = {
  items: [],
  isLoading: false,
  openPage: 1,
  error: '',
  count: null,
  openOrder: null,
  createOrderModal: false,
  deleteOrderItem: null,
};

const ordersSlice = createSlice({
  name: 'ordersSlice',
  initialState,
  reducers: {
    setOpenProduct(state, action: { payload: IOrder | null }) {
      state.openOrder = action.payload;
    },
    setCreateOrderModal(state, action: { payload: boolean }) {
      state.createOrderModal = action.payload;
    },
    setOpenPage(state, action: { payload: number }) {
      state.openPage = action.payload;
    },
    createOrder(state, action: { payload: IOrder }) {
      state.items = [action.payload, ...state.items];
      if (state.count) state.count += 1;
    },
    setDeleteOrderItem(state, action: { payload: IOrder | null }) {
      state.deleteOrderItem = action.payload;
    },
    deleteOrder(state, action: { payload: string }) {
      state.items = state.items.filter((e) => e._id !== action.payload);
      state.deleteOrderItem = null;
      if (state.count) state.count -= 1;
    },
    updateOrder(state, action: { payload: IOrder[] }) {
      state.items = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchOrders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = [...state.items, ...action.payload.items];
      state.count = action.payload.count;
    });
    builder.addCase(fetchOrders.rejected, (state) => {
      state.isLoading = false;
      state.error = 'error.fetchOrders';
    });
  },
});

export const {
  setOpenProduct,
  setCreateOrderModal,
  createOrder,
  setDeleteOrderItem,
  deleteOrder,
  setOpenPage,
  updateOrder,
} = ordersSlice.actions;

export default ordersSlice.reducer;
