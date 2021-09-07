import { initialStateProduct } from "../initialState";
import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./constants";

const productsReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        isLoading: "loading",
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: "succeeded",
        data: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: "failed",
        data: [],
      };

    default:
      return state;
  }
};
export default productsReducer;
