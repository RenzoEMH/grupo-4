import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'shopCart',
  initialState: {
    cart: [],
  },
  reducers: {
    setShopCart: (state, { payload: shopCart }) => {
      state.cart = [...shopCart];
    },
    removeCard: (state, { payload: id }) => {
      state.cart = [...state.cart].filter((item) => {
        return item.id !== id;
      });
    },
  },
});

export const { setShopCart, removeCard } = cartSlice.actions;

export default cartSlice.reducer;
