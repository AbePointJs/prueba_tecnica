import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./actions";
import { sliceName, initState } from "../constants";

// Cart Slice
const cartSlice = createSlice({
  name: sliceName,
  initialState: initState,
  extraReducers: (builder) => {
    builder.addCase(addItemToCart.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(addItemToCart.fulfilled, (state) => {
      state.isLoading = false;
    });

    builder.addCase(addItemToCart.rejected, () => {});
  },
});

export default cartSlice.reducer;
