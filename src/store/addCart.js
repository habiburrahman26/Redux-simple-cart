import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cardItem: [],
};

const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const id = action.payload.id;
      const existProduct = state.cardItem.find((item) => item.id === id);

      if (existProduct) {
        const filterCart = state.cardItem.filter((item) => item.id !== id);
        state.cardItem = [
          ...filterCart,
          { ...existProduct, quantity: existProduct.quantity + 1 },
        ];
      } else {
        state.cardItem.push(action.payload);
      }
    },
    removeToCard(state, action) {
      const id = action.payload;
      const existProduct = state.cardItem.find((item) => item.id === id);

      if (existProduct.quantity > 1) {
        const filterCart = state.cardItem.filter((item) => item.id !== id);
        state.cardItem = [
          ...filterCart,
          { ...existProduct, quantity: existProduct.quantity - 1 },
        ];
      } else {
        const filterCart = state.cardItem.filter((item) => item.id !== id);
        state.cardItem = [...filterCart];
      }
    },
  },
});

export const addToCartActions = addToCartSlice.actions;

export default addToCartSlice.reducer;
