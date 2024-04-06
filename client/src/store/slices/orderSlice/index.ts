import { createSlice } from '@reduxjs/toolkit';
import { CardsTypes } from './types';
import { fetchOrders } from './asyncActions';

const initialState: CardsTypes = {
  items: [],
  status: '',
};

const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchOrders.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.status = '';
      state.items = action.payload;
    });
    builder.addCase(fetchOrders.rejected, (state) => {
      state.status = 'err';
    });
  },
});

//export const {} = cardsSlice.actions;

export default cardsSlice.reducer;
