import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [{ id: 1, qty: 2 }],
  },
  reducers: {
    addToCart: (state, action) => {
      state.data.push(action.payload);
    },
  },
});


export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
