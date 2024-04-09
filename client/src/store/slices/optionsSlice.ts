import { createSlice } from '@reduxjs/toolkit';

interface IOptions {
  search: string;
}

const initialState: IOptions = {
  search: '',
};

const optionsSlice = createSlice({
  name: 'optionsSlice',
  initialState,
  reducers: {
    setSearch(state, action: { payload: string }) {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = optionsSlice.actions;

export default optionsSlice.reducer;
