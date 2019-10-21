import { combineReducers } from "redux";
import userReducer from "./userReducer";
import themeReducer from "./themeReducer";

const allReducers = combineReducers({
  user: userReducer,
  themes: themeReducer
});

export default allReducers;
