import { createSlice } from '@reduxjs/toolkit';

export const eventDetailSlice = createSlice({
  name: 'mockDB',
  initialState: {
    mockDB: [],
  },
  reducers: {
    detailCard: (state, { payload: mockDB }) => {
      state.mockDB = [...mockDB];
    },
  },
});
export const { detailCard } = eventDetailSlice.actions;

export default eventDetailSlice.reducer;
