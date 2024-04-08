import axios from '../../../api/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct } from '../../../models/IProduct';
import { ProductsParams } from './types';

export const fetchOrderProducts = createAsyncThunk('cards/fetchOrderProducts', async (id: string) => {
  const res = await axios.get<IProduct[]>('/order/' + id);
  return res.data;
});

export const fetchProducts = createAsyncThunk('cards/fetchProducts', async (params: ProductsParams) => {
  const { productStatus, productType } = params;

  const query: ProductsParams = {};

  if (productType !== 'All') {
    query.productType = productType;
  }

  if (productStatus !== 'All') {
    query.productStatus = productStatus;
  }

  const res = await axios.get<IProduct[]>('/products', {
    params: query,
  });
  return res.data;
});
