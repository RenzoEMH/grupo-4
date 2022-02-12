import { createSlice } from '@reduxjs/toolkit';

export const singleEventSlice = createSlice({
  name: 'singleEvent',
  initialState: {
    singleEvent: {
      id: 0,
      title: '',
      img: '',
      ticketImg: '',
      startHour: '',
      endHour: '',
      lowestPrice: 0,
      category: '',
      ageRestriction: '',
      description: '',
      infoExtra: '',
      typeTicket: [{}],
      dates: [],
      city: '',
      address: '',
      idOwner: 0,
      ownerName: '',
    },
    page: 1,
  },
  reducers: {
    setAtribute: (state, { payload: atribute }) => {
      state.singleEvent[`${atribute.key}`] = atribute.value;
    },
    nextPage: (state) => {
      state.page++;
    },
    prevPage: (state) => {
      state.page--;
    },
  },
});

export const { setAtribute, nextPage, prevPage } = singleEventSlice.actions;

export default singleEventSlice.reducer;
