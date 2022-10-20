import productsReducer from "./state/reducers";
import { actionGetProductList, actionGetProductDetail } from "./state/actions";

// Action selectors para ser usados por useSelector
const selectProductsLoading = (state) => state.products.isLoading;
const selectProducts = (state) => state.products.products;
const selectProductsError = (state) => state.products.error;

export {
  productsReducer,
  selectProductsLoading,
  selectProducts,
  actionGetProductList,
  actionGetProductDetail,
  selectProductsError,
};
