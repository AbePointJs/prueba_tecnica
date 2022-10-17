import { createSlice } from "@reduxjs/toolkit";
import { sliceName, initState } from "../constants";
import { getProductDetail, getProductList } from "./actions";

const productSlice = createSlice({
  name: sliceName,
  initialState: initState,
  extraReducers: (builder) => {
    // Detalles de un solo producto
    builder.addCase(getProductDetail.pending, () => {});
    builder.addCase(getProductDetail.fulfilled, () => {});
    builder.addCase(getProductDetail.rejected, () => {});

    // Lista de todos los productos
    builder.addCase(getProductList.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getProductList.fulfilled, (state, action) => {
      state.error = false;
      state.isLoading = false;
      state.products = action.payload;
    });

    builder.addCase(getProductList.rejected, (state) => {
      state.error = "Holaaa";
    });
  },
});

export default productSlice.reducer;
