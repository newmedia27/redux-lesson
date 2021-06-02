import { SET_CATEGORY_COUNT, SET_CATEGORY_ITEM, SET_LOAD } from "../constants";

const initialState = {
  categoryItems: [],
  count: 0,
  loading: false,
  error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
      case SET_CATEGORY_ITEM:
        return {...state, categoryItems: action.payload}
    case SET_CATEGORY_COUNT:
        return {...state, count: action.payload}
    case SET_LOAD:
        return {...state, loading: action.payload}

      default:
        return state;
    }

}
