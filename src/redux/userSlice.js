import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {},
    loginSucess: (state) => {},
    loginFailue: (state) => {},
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
