import axios from '../../../api/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IOrder } from '../../../models/IOrder';

export const fetchOrders = createAsyncThunk('cards/fetchOrders', async () => {
  const res = await axios.get<IOrder[]>('/orders');
  return res.data;
});
