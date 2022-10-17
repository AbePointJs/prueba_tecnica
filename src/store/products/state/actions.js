import { createAsyncThunk } from "@reduxjs/toolkit";
import { sliceName } from "../constants";

import { fetchAllProducts, fetchProductDetails } from "../../../utils/api";

export const getProductList = createAsyncThunk(`${sliceName}/getProductList`, () =>
  fetchAllProducts(),
);

export const getProductDetail = createAsyncThunk(`${sliceName}/getProductDetails`, (id) =>
  fetchProductDetails(id),
);
