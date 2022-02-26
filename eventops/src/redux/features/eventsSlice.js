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
    saveEditEvent: (state, { payload: editedEvent }) => {
      const index = state.eventos.findIndex(
        (event) => event._id === editedEvent._id
      );
      state.eventos[index] = { ...editedEvent };
    },
  },
});

export const { setFilteredEvents, addNewEvent, saveEditEvent } =
  eventsSlice.actions;

export default eventsSlice.reducer;
