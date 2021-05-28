import { combineReducers } from "redux";
// import tasks from './tasks';
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  //   tasks,
  todo: todoReducer,
});

export default rootReducer;
