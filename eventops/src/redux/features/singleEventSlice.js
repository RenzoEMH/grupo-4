import { createSlice } from '@reduxjs/toolkit';
import emptySingleEvent from '../../utils/emptySingleEvent';

export const singleEventSlice = createSlice({
  name: 'singleEvent',
  initialState: {
    singleEvent: { ...emptySingleEvent },
    page: 1,
  },
  reducers: {
    setAtribute: (state, { payload: atribute }) => {
      state.singleEvent[`${atribute.key}`] = atribute.value;
    },
    resetAllAtribute: (state) => {
      state.singleEvent = { ...emptySingleEvent };
    },
    nextPage: (state) => {
      state.page++;
    },
    prevPage: (state) => {
      state.page--;
    },
    resetPage: (state) => {
      state.page = 1;
    },
  },
});

export const { setAtribute, resetAllAtribute, nextPage, prevPage, resetPage } =
  singleEventSlice.actions;

export default singleEventSlice.reducer;
