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
    setAllTickets: (state, { payload: allTickets }) => {
      state.tickets = [...allTickets];
    },
  },
});

export const { addNewTicket, setAllTickets } = ticketsSlice.actions;

export default ticketsSlice.reducer;
