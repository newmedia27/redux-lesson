import { SET_CATEGORY_COUNT, SET_CATEGORY_ITEM, SET_LOAD } from "../constants";
import { getCategoriesRequest } from "../services/swapi";

export const setCategoryItems = (payload) => ({
  type: SET_CATEGORY_ITEM,
  payload,
});
export const setCategoryCount = (payload) => ({
  type: SET_CATEGORY_COUNT,
  payload,
});
export const setCategoryLoad = (payload) => ({
  type: SET_LOAD,
  payload,
});

export const getCategories = (categoryName) => {
  return async (dispatch) => {
    dispatch(setCategoryLoad(true));

    try {
      const response = await getCategoriesRequest(categoryName);
      const { count, results } = response;
      dispatch(setCategoryCount(count));
      dispatch(setCategoryItems(results));
    } catch (error) {
      // dispatch(setError())
      console.log(error);
    } finally {
      dispatch(setCategoryLoad(false));
    }
  };
};
