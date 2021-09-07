import {
  fetchProductsStart,
  fetchProductsFailure,
  fetchProductsSuccess,
} from "./actions";
export const fetchProductsStartThunk = () => {
  return async (dispatch, getState) => {
    // const { users } = getState();
    // if (users.data.length > 1) {
    //   return;
    // }

    dispatch(fetchProductsStart());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      dispatch(fetchProductsSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};
