import { createSlice } from '@reduxjs/toolkit';

export const eventDetailSlice = createSlice({
  name: 'eventDetail',
  initialState: {
    eventDetail: [],
  },
  reducers: {
    detailCard: (state, { payload: eventDetail }) => {
      state.eventDetail = [...eventDetail];
    },
  },
});
export const { detailCard } = eventDetailSlice.actions;

export default eventDetailSlice.reducer;
