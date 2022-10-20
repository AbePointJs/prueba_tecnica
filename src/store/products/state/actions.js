import { createAsyncThunk } from "@reduxjs/toolkit";
import { sliceName } from "../constants";
import { fetchAllProducts, fetchProductDetails } from "../../../utils/api";

export const actionGetProductList = createAsyncThunk(`${sliceName}/getProductList`, () =>
  fetchAllProducts(),
);

export const actionGetProductDetail = createAsyncThunk(`${sliceName}/getProductDetails`, (id) =>
  fetchProductDetails(id),
);
