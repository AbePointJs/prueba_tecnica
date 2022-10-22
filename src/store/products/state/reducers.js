import { createSlice } from "@reduxjs/toolkit";
import { sliceName, initState } from "../constants";
import { actionGetProductDetail, actionGetProductList } from "./actions";

const productSlice = createSlice({
  name: sliceName,
  initialState: initState,
  extraReducers: (builder) => {
    // Manage get details of product
    builder.addCase(actionGetProductDetail.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });

    builder.addCase(actionGetProductDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.productDetails = action.payload;
    });

    builder.addCase(actionGetProductDetail.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });

    // Manage get product list
    builder.addCase(actionGetProductList.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });

    builder.addCase(actionGetProductList.fulfilled, (state, action) => {
      state.error = false;
      state.isLoading = false;
      state.products = action.payload;
    });

    builder.addCase(actionGetProductList.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });
  },
});

export default productSlice.reducer;
