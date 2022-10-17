import productsReducer from "./state/reducers";
import { sliceName as n } from "./constants";
import { getProductList, getProductDetail } from "./state/actions";

// Action selectors para ser usados por useSelector
const selectLoading = (state) => state[n].isLoading;
const selectProducts = (state) => state[n].products;
const selectError = (state) => state[n].error;

export {
  productsReducer,
  selectLoading,
  selectProducts,
  getProductList,
  getProductDetail,
  selectError,
};
