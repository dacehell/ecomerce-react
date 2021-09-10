import { combineReducers } from "redux";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./products/productReducer";
import { cartReducer } from "./cart/cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});
export default rootReducer;
