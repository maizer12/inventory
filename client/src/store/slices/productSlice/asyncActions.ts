import axios from '../../../api/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct } from '../../../models/IProduct';

export const fetchOrderProducts = createAsyncThunk('cards/fetchOrderProducts', async (id: string) => {
  const res = await axios.get<IProduct[]>('/order/' + id);
  return res.data;
});
