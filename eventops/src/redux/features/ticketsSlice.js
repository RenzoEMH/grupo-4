import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllTickets } from '../../api/tickets';

export const getAllTicketsAsync = createAsyncThunk(
  'tickets/getAll',
  async () => {
    const response = await getAllTickets();
    return response.data instanceof Array ? response.data : [];
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(getAllTicketsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getAllTicketsAsync.fulfilled,
        (state, { payload: allTickets }) => {
          state.loading = false;
          state.tickets = allTickets;
        }
      );
  },
});

export const { addNewTicket, setAllTickets } = ticketsSlice.actions;

export const selectTickets = (state) => state.tickets.tickets;

export default ticketsSlice.reducer;
