import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getEpaycoSale } from '../../api/sales';

export const getEpaycoSaleAsync = createAsyncThunk(
  'sales/getEpaycoSale',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getEpaycoSale(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(getEpaycoSaleAsync.pending, (state) => {
        state.isSearching = true;
      })
      .addCase(getEpaycoSaleAsync.fulfilled, (state, { payload }) => {
        state.isSearching = false;
        state.ePaycoSale = payload;
      })
      .addCase(getEpaycoSaleAsync.rejected, (state, { payload }) => {
        state.isSearching = false;
        state.ePaycoError = payload;
      });
  },
});

export const { addNewSale } = salesSlice.actions;

// selector
export const selectIsSearching = (state) => state.sales.isSearching;
export const selectePaycoSale = (state) => state.sales.ePaycoSale;
export const selectePaycoError = (state) => state.sales.ePaycoError;

export default salesSlice.reducer;
