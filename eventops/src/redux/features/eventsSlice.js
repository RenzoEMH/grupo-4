import { createSlice } from '@reduxjs/toolkit';

export const eventsSlice = createSlice({
  name: 'eventos',
  initialState: {
    eventos: [],
    filteredEvents: [],
  },
  reducers: {
    setFilteredEvents: (state, { payload: events }) => {
      state.filteredEvents = [...events];
    },
    addNewEvent: (state, { payload: newEvent }) => {
      state.eventos.push({ ...newEvent });
    },
  },
});

export const { setBothArrayEvents, setFilteredEvents } = eventsSlice.actions;

export default eventsSlice.reducer;
