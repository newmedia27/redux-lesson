import { createSelector } from "reselect";
import { createAction, handleActions } from "redux-actions";
import { getCategoriesRequest } from "../services/swapi";

const namespace = "product";

const SET_PRODUCT_ITEM = `${namespace}/SET_PRODUCT_ITEM`;
const SET_LOAD = `${namespace}/SET_LOAD`;

const setProductItem = createAction(SET_PRODUCT_ITEM);
const setLoad = createAction(SET_LOAD);

const initialState = {
  productItem: null,
  isLoad: false,
  error: null,
};

export default handleActions(
  {
    [SET_PRODUCT_ITEM]: (state, action) => ({
      ...state,
      productItem: action.payload,
    }),
    [SET_LOAD]: (state, { payload }) => ({ ...state, isLoad: payload }),
  },
  initialState
);

export const productSelector = (state) => state[namespace];
// export const realyProductItemsSelector = (state) => {
//   const { productItem } = productSelector(state);
//   return (
//     productItem &&
//     Object.keys(productItem).length > 0 &&
//     Object.keys(productItem).filter((e) => typeof productItem[e] === "string")
//   );
// };

export const realyProductItemsSelector = createSelector(
  [productSelector],
  ({ productItem }) => {
    return (
      productItem &&
      Object.keys(productItem).length > 0 &&
      Object.keys(productItem).filter((e) => typeof productItem[e] === "string")
    );
  }
);

export const getProductRequest = (categoryName, productId) => {
  return async (dispatch) => {
    dispatch(setLoad(true));
    try {
      const response = await getCategoriesRequest(
        `${categoryName}/${productId}`
      );
      dispatch(setProductItem(response));
      console.log(response, "PRODUCT_RESPONSE");
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoad(false));
    }
  };
};
