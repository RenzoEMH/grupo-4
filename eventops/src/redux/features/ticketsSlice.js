import { createSlice } from '@reduxjs/toolkit';

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
  },
  reducers: {
    addNewTicket: (state, { payload: newTicket }) => {
      state.tickets.push({ ...newTicket });
    },
  },
});

export const { addNewTicket } = ticketsSlice.actions;

export default ticketsSlice.reducer;
