import { UPDATE_USER, SET_USERNAME, CURRENT_USER } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, items: action.payload };
    case SET_USERNAME:
      return { ...state, items: action.payload };
    case CURRENT_USER:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default userReducer;
