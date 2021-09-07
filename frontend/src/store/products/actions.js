//import { store } from "../../store";
import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./constants";
export const fetchProductsStart = () => ({
  type: FETCH_PRODUCTS_START,
});
export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (errorMessage) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: errorMessage,
});
