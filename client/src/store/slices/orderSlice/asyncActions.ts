import axios from '../../../api/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFetchOrders, IParamsOrder } from './types';
import { RootState } from '../..';

// export const fetchOrders = createAsyncThunk('cards/fetchOrders', async (_, { getState }) => {
//   const {
//     optionsSlice: { search },
//     orderSlice: { openPage, items },
//   } = getState() as RootState;

//   const currentPage = items.length === 0 ? 1 : openPage;

//   const queryParams: IParamsOrder = { page: currentPage };
//   if (search) {
//     queryParams.search = search;
//   }

//   const response = await axios.get<IFetchOrders>('/orders', { params: queryParams });

//   return response.data;
// });
export const fetchOrders = createAsyncThunk('cards/fetchOrders', async (_, { getState }) => {
  const state = getState() as RootState;
  const search = state.optionsSlice.search;
  const { openPage, items } = state.orderSlice;
  const page = !items.length ? 1 : openPage;
  console.log(items.length);
  console.log(page);
  const params = search ? { search, page } : { page };
  const res = await axios.get<IFetchOrders>('/orders', { params });
  return res.data;
});
