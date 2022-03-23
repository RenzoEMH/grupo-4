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
    state: '',
    page: 1,
    length: 0,
    nameUser: '',
    stateUser: 'true',
    emailUser: '',
    idUser: '',
  },
  reducers: {
    setNameUser: (state, { payload: name }) => {
      state.nameUser = name;
    },
    setStateUser: (state, { payload: stateUser }) => {
      state.stateUser = stateUser;
    },
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
    setState: (state, { payload: newState }) => {
      state.state = newState;
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
  setNameUser,
  setStateUser,
  setTitleSearch,
  setPrices,
  setCategory,
  setDates,
  setState,
  load,
  setLength,
} = filtersSlice.actions;

export default filtersSlice.reducer;
