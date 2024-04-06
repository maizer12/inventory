import axios from '../../../api/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IOrder } from '../../../models/IOrder';
import { IProduct } from '../../../models/IProduct';

export const fetchOrders = createAsyncThunk('cards/fetchOrders', async () => {
  const res = await axios.get<IOrder[]>('/orders');
  return res.data;
});

export const fetchOrderProducts = createAsyncThunk('cards/fetchOrderProducts', async (id: string) => {
  const res = await axios.get<IProduct[]>('/api/order/' + id);
  return res.data;
});
