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
      const dates = [...newEvent.dates];
      const tTickets = [...newEvent.typeTicket];
      const fullTTicket = dates
        .map((date) => {
          return tTickets.map((tTicket) => {
            return { ...tTicket, date: date };
          });
        })
        .reduce((acc, currVal) => acc.concat(currVal));
      console.log(state, fullTTicket);
      newEvent.typeTicket = [...fullTTicket];
      state.eventos.push({ ...newEvent });
    },
  },
});

export const { setFilteredEvents, addNewEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
