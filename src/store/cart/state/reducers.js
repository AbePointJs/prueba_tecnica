import { createSlice } from "@reduxjs/toolkit";
import { actionAddItemToCart } from "./actions";
import { sliceName, initState } from "../constants";

// Cart Slice
const cartSlice = createSlice({
  name: sliceName,
  initialState: initState,
  extraReducers: (builder) => {
    builder.addCase(actionAddItemToCart.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(actionAddItemToCart.fulfilled, (state) => {
      state.isLoading = false;
    });

    builder.addCase(actionAddItemToCart.rejected, () => {});
  },
});

export default cartSlice.reducer;
