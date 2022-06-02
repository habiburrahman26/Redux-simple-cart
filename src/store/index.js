import { configureStore } from '@reduxjs/toolkit';
import showCartReducer from '../store/showCart';
import addToCartReducer from '../store/addCart';

const store = configureStore({
  reducer: {
    showCart: showCartReducer,
    cart: addToCartReducer,
  },
});

export default store;
