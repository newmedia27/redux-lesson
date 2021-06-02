import { combineReducers } from "redux";
// import tasks from './tasks';
import todoReducer from "./todoReducer";
import categories from "./categories";
import product from "./product";

const rootReducer = combineReducers({
  //   tasks,
  todo: todoReducer,
  categories,
  product,
});

export default rootReducer;
