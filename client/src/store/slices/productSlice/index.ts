import { createSlice } from '@reduxjs/toolkit';
import { ProductSliceTypes } from './types';
import { fetchOrderProducts } from './asyncActions';
import { IProduct } from '../../../models/IProduct';

const initialState: ProductSliceTypes = {
  items: [],
  isLoading: false,
  createProductModal: false,
  deleteProductItem: null,
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
    setDeleteProductItem(state, action: { payload: IProduct | null }) {
      state.deleteProductItem = action.payload;
    },
    deleteOrder(state, action: { payload: string }) {
      state.items = state.items.filter((e) => e._id !== action.payload);
      state.deleteProductItem = null;
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

export const { createProduct, setCreateProductModal, setDeleteProductItem, deleteOrder } = productSlice.actions;

export default productSlice.reducer;
