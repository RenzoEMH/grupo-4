import { createSlice } from '@reduxjs/toolkit';

const obtainUnique = (storeCart, shopCart) => {
  return storeCart.map((item) => {
    const matchIndex = shopCart.findIndex(
      (object) =>
        item.idUsuario === object.idUsuario &&
        item.idEvento === object.idEvento &&
        item.date === object.date &&
        item.typeTicket === object.typeTicket
    );
    if (matchIndex >= 0) {
      const fuseValue = item.amount + shopCart[matchIndex].amount;
      shopCart.splice(matchIndex, 1);
      return { ...item, amount: fuseValue };
    }
    return item;
  });
};

export const cartSlice = createSlice({
  name: 'shopCart',
  initialState: {
    cart: [],
  },
  reducers: {
    fuseCarts: (state, { payload: shopCart }) => {
      const actualCart = [...state.cart];
      const fusedCart = [...obtainUnique(actualCart, shopCart), ...shopCart];
      state.cart = [...fusedCart];
    },
    removeCard: (state, { payload: id }) => {
      state.cart = [...state.cart].filter((item) => {
        return item.id !== id;
      });
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const { fuseCarts, removeCard, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
