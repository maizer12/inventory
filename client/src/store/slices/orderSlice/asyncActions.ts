import axios from '../../../api/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFetchOrders } from './types';
import { RootState } from '../..';

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (_, { getState }) => {
  const state = getState() as RootState;
  const search = state.optionsSlice.search;
  const page = state.orderSlice.openPage;
  const params = search ? { search, page } : { page };
  const res = await axios.get<IFetchOrders>('/orders', { params });
  return res.data;
});
