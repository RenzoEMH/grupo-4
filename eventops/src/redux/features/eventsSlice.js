import { createSlice } from '@reduxjs/toolkit';
import eventos from '../../utils/eventos';

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    eventos,
  },
  reducers: {
    updateEvents: (state) => {
      console.log(state);
    },
  },
});

export const { updateEvents } = eventsSlice.actions;

export default eventsSlice.reducer;
