import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    // payloads:product
    addProduct: (state, action) => {
      console.log(action.payload);
      state.quantity += action.payload.quantity;
      state.products.push(action.payload);
      state.totalPrice += action.payload.price * action.payload.quantity;
      console.log(state.quantity);
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
