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
      state.error = false;
    });

    builder.addCase(actionAddItemToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.count = action.payload.count;
    });

    builder.addCase(actionAddItemToCart.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default cartSlice.reducer;
