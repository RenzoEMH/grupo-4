import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'shopCart',
  initialState: {
    cart: [],
  },
  reducers: {
    setCart: (state, { payload: shopCart }) => {
      state.cart = [...shopCart];
    },
    updateTicketAmount: (state, { payload: ticket }) => {
      state.cart[ticket.index].amount = ticket.amount;
    },
    removeTicketFromCart: (state, { payload: id }) => {
      state.cart = [...state.cart].filter((item) => {
        return item.id !== id;
      });
    },
  },
});

export const { setCart, updateTicketAmount, removeTicketFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
