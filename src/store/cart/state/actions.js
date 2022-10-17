import { createAsyncThunk } from "@reduxjs/toolkit";
import { sliceName } from "../constants";
import { postItemToCard } from "../../../utils/api";

export const addItemToCart = createAsyncThunk(`${sliceName}/addToCard`, (id) => postItemToCard(id));
