import productsReducer from "./state/reducers";
import { sliceName as n } from "./constants";
import { actionGetProductList, actionGetProductDetail } from "./state/actions";

// Action selectors para ser usados por useSelector
const selectProductsLoading = (state) => state[n].isLoading;
const selectProducts = (state) => state[n].products;
const selectProductsError = (state) => state[n].error;

export {
  productsReducer,
  selectProductsLoading,
  selectProducts,
  actionGetProductList,
  actionGetProductDetail,
  selectProductsError,
};
