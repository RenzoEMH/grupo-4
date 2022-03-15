import { createSlice } from '@reduxjs/toolkit';
import emptySingleTicket from '../../utils/emptySingleTicket';

export const singleTicketSlice = createSlice({
  name: 'singleTicket',
  initialState: {
    singleTicket: { ...emptySingleTicket },
  },
  reducers: {
    setAtribute: (state, { payload: atribute }) => {
      state.singleTicket[`${atribute.key}`] = atribute.value;
    },
    resetAllAtribute: (state) => {
      state.singleTicket = { ...emptySingleTicket };
    },
  },
});

export const { setAtribute, resetAllAtribute } = singleTicketSlice.actions;

export default singleTicketSlice.reducer;
