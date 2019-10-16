import { combineReducers } from "redux";
import userReducer from "./userReducer";
import themeReducer from "./themeReducer";

const allReducers = combineReducers({
  users: userReducer,
  themes: themeReducer
});

export default allReducers;
