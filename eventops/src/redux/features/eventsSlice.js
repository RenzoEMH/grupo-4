import { createSlice } from '@reduxjs/toolkit';

export const eventsSlice = createSlice({
  name: 'eventos',
  initialState: {
    allEvents: [],
    filteredEvents: [],
  },
  reducers: {
    setBothArrayEvents: (state, { payload: events }) => {
      // console.log('before: ', state.allEvents, state.filteredEvents);
      state.allEvents = [...events];
      state.filteredEvents = [...events];
      // console.log('setAllEvents: ', state.allEvents, state.filteredEvents);
    },
    setFilteredEvents: (state, { payload: events }) => {
      // console.log('before setFilteredEvents: ', events);
      state.filteredEvents = [...events];
      // console.log('setFilteredEvents: ', state.filteredEvents);
    },
  },
});

export const { setBothArrayEvents, setFilteredEvents } = eventsSlice.actions;

export default eventsSlice.reducer;
