import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filtros',
  initialState: {
    titleSearch: '',
    minPrice: '',
    maxPrice: '',
    category: '',
    minDate: '',
    maxDate: '',
    page: 1,
    length: 0,
  },
  reducers: {
    setTitleSearch: (state, { payload: query }) => {
      state.titleSearch = query;
      state.page = 1;
    },
    setPrices: (state, { payload: prices }) => {
      state.minPrice = prices.min;
      state.maxPrice = prices.max;
      state.page = 1;
    },
    setCategory: (state, { payload: category }) => {
      state.category = category;
      state.page = 1;
    },
    setDates: (state, { payload: dateRange }) => {
      state.minDate = dateRange.min;
      state.maxDate = dateRange.max;
      state.page = 1;
    },
    load: (state) => {
      state.page += 1;
    },
    // filtered array length
    setLength: (state, { payload: newLength }) => {
      state.length = newLength;
    },
  },
});

export const {
  setTitleSearch,
  setPrices,
  setCategory,
  setDates,
  load,
  setLength,
} = filtersSlice.actions;

export default filtersSlice.reducer;
