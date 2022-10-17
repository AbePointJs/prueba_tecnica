import { createSlice } from "@reduxjs/toolkit";
import { sliceName, initState } from "../constants";
import { actionGetProductDetail, actionGetProductList } from "./actions";

const productSlice = createSlice({
  name: sliceName,
  initialState: initState,
  extraReducers: (builder) => {
    // Detalles de un solo producto
    builder.addCase(actionGetProductDetail.pending, () => {});
    builder.addCase(actionGetProductDetail.fulfilled, () => {});
    builder.addCase(actionGetProductDetail.rejected, () => {});

    // Lista de todos los productos
    builder.addCase(actionGetProductList.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(actionGetProductList.fulfilled, (state, action) => {
      state.error = false;
      state.isLoading = false;
      state.products = action.payload;
    });

    builder.addCase(actionGetProductList.rejected, (state) => {
      state.error = true;
    });
  },
});

export default productSlice.reducer;
