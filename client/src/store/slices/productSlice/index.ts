import { createSlice } from '@reduxjs/toolkit';
import { ProductSliceTypes } from './types';
import { fetchOrderProducts } from './asyncActions';
import { IProduct } from '../../../models/IProduct';

const initialState: ProductSliceTypes = {
  items: [],
  isLoading: false,
  createProductModal: false,
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setCreateProductModal(state, action: { payload: boolean }) {
      state.createProductModal = action.payload;
    },
    createProduct(state, action: { payload: IProduct }) {
      state.items = [action.payload, ...state.items];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchOrderProducts.pending, (state) => {
      state.items = [];
      state.isLoading = true;
    });
    builder.addCase(fetchOrderProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchOrderProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { createProduct, setCreateProductModal } = productSlice.actions;

export default productSlice.reducer;
