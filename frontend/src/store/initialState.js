export const initialStateProduct = {
  isLoading: "iddle",
  data: [],
  errorMessage: null,
  message: null,
};
const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
export const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};
