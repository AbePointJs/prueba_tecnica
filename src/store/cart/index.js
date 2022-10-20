import cartReducer from "./state/reducers";
import { actionAddItemToCart } from "./state/actions";

const selectCartLoading = (state) => state.cart.isLoading;
const selectCartError = (state) => state.cart.error;
const selectCartCount = (state) => state.cart.count;

export { cartReducer, actionAddItemToCart, selectCartLoading, selectCartError, selectCartCount };
