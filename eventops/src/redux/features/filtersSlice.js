import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filtros',
  initialState: {
    titleSearch: '',
    minPrice: '',
    maxPrice: '',
  },
  reducers: {
    setTitleSearch: (state, { payload: query }) => {
      state.titleSearch = query;
    },
    setPrices: (state, { payload: prices }) => {
      state.minPrice = prices.min;
      state.maxPrice = prices.max;
    },
  },
});

export const { setTitleSearch, setPrices } = filtersSlice.actions;

export default filtersSlice.reducer;
