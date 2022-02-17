import { createSlice } from '@reduxjs/toolkit';

export const salesSlice = createSlice({
  name: 'sales',
  initialState: {
    sales: [],
  },
  reducers: {
    addNewSale: (state, { payload: newSale }) => {
      state.sales.push({ ...newSale });
    },
  },
});

export const { addNewSale } = salesSlice.actions;

export default salesSlice.reducer;
