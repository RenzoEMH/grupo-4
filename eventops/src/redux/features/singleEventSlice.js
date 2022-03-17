import { createSlice } from '@reduxjs/toolkit';
import emptySingleEvent from '../../utils/emptySingleEvent';

export const singleEventSlice = createSlice({
  name: 'singleEvent',
  initialState: {
    singleEvent: { ...emptySingleEvent },
    editSingleEvent: {},
    page: 1,
    editPage: 1,
  },
  reducers: {
    setAtribute: (state, { payload: atribute }) => {
      state.singleEvent[`${atribute.key}`] = atribute.value;
    },
    resetAllAtributes: (state) => {
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
    // EDIT
    setEditAtribute: (state, { payload: atribute }) => {
      state.editSingleEvent[`${atribute.key}`] = atribute.value;
    },
    setAllEditAtributes: (state, { payload: singleEvent }) => {
      state.editSingleEvent = { ...singleEvent };
    },
    resetEditAllAtributes: (state) => {
      state.editSingleEvent = { ...emptySingleEvent };
    },
    nextEditPage: (state) => {
      state.editPage++;
    },
    prevEditPage: (state) => {
      state.editPage--;
    },
    resetEditPage: (state) => {
      state.editPage = 1;
    },
  },
});

export const {
  setAtribute,
  resetAllAtributes,
  nextPage,
  prevPage,
  resetPage,
  setEditAtribute,
  setAllEditAtributes,
  resetEditAllAtributes,
  nextEditPage,
  prevEditPage,
  resetEditPage,
} = singleEventSlice.actions;

export const selectSingleEvent = (state) => state.singleEvent.singleEvent;
export const selectPage = (state) => state.singleEvent.page;
export const selectEditedSingleEvent = (state) =>
  state.singleEvent.editSingleEvent;

export default singleEventSlice.reducer;
