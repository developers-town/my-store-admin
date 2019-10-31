import { combineReducers } from "redux";
import userReducer from "./userReducer";
import tableReducer from "./tableReducer";

const allReducers = combineReducers({
  user: userReducer,
  table: tableReducer
});

export default allReducers;
