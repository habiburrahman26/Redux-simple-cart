import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShow: false,
};

const showCartSlice = createSlice({
  name: 'toogle-cart',
  initialState,
  reducers: {
    show(state) {
      state.isShow = !state.isShow;
    },
  },
});

export const showCartActions = showCartSlice.actions;
export default showCartSlice.reducer;
