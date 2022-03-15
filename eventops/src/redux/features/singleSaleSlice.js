import { createSlice } from '@reduxjs/toolkit';
import emptySingleSale from '../../utils/emptySingleSale';

export const singleSaleSlice = createSlice({
  name: 'singleSale',
  initialState: {
    singleSale: { ...emptySingleSale },
  },
  reducers: {
    setAtribute: (state, { payload: atribute }) => {
      state.singleSale[`${atribute.key}`] = atribute.value;
    },
    resetAllAtribute: (state) => {
      state.singleSale = { ...emptySingleSale };
    },
  },
});

export const { setAtribute, resetAllAtribute } = singleSaleSlice.actions;

export default singleSaleSlice.reducer;
