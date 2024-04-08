import axios from '../../../api/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFetchOrders } from './types';

export const fetchOrders = createAsyncThunk('cards/fetchOrders', async () => {
  const res = await axios.get<IFetchOrders>('/orders');
  return res.data;
});
