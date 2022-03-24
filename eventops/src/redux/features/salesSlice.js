import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createSale } from '../../api/sales';
import parseJwt from '../../utils/ParseJwt';
import { emptyCart, selectCart } from './cartSlice';
import { selectToken } from './usersSlice';

export const createSaleAsync = createAsyncThunk(
  'sales/getEpaycoSale',
  async (id, { dispatch, getState, rejectWithValue }) => {
    const cart = selectCart(getState());
    const token = selectToken(getState());
    const sesion = parseJwt(token);
    const saleData = {
      id,
      cart,
      userId: sesion.id,
    };
    try {
      const { status, data } = await createSale(saleData);
      if (status !== 200) throw new Error(data.error);
      dispatch(emptyCart());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
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
      .addCase(createSaleAsync.pending, (state) => {
        state.isCreating = true;
        state.createdSale = null;
        state.saleError = null;
      })
      .addCase(createSaleAsync.fulfilled, (state, { payload }) => {
        state.isCreating = false;
        state.createdSale = payload;
      })
      .addCase(createSaleAsync.rejected, (state, { payload: message }) => {
        state.isCreating = false;
        state.saleError = message;
      });
  },
});

export const { addNewSale } = salesSlice.actions;

// selector
export const selectIsCreating = (state) => state.sales.isCreating;
export const selectCreatedSale = (state) => state.sales.createdSale;
export const selectSaleError = (state) => state.sales.saleError;

export default salesSlice.reducer;
