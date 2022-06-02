import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cardItem: [],
  totalQuantity: 0,
};

const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cardItem.find(
        (item) => item.itemId === newItem.id
      );
      console.log(existingItem);
      state.totalQuantity++;

      if (!existingItem) {
        state.cardItem.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeToCard(state, action) {
      const id = action.payload;
      const existingItem = state.cardItem.find((item) => item.itemId === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.cardItem = state.cardItem.filter((item) => item.itemId !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const addToCartActions = addToCartSlice.actions;

export default addToCartSlice.reducer;
