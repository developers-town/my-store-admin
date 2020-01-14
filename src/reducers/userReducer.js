import {
  UPDATE_USER,
  SET_USERNAME,
  CURRENT_USER,
  GET_USERS,
  SELECTED_USER,
  UPDATE_SELECTED_USER,
  LOGIN_USER,
  ENABLE_LOADING,
  LOGIN_ERROR,
  GET_SUPPLIER
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
  loading: false,
  logged: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return { ...state, login_error: action.payload };
    case LOGIN_USER:
      return {
        ...state,
        PROFILE: action.payload,
        loading: false,
        logged: true
      };
    case GET_USERS:
      return { ...state, USERS: action.payload, loading: false };
    case UPDATE_USER:
      return { ...state, items: action.payload };
    case SET_USERNAME:
      return { ...state, items: action.payload };
    case CURRENT_USER:
      return { ...state, CURRENT_USER: action.payload };
    case SELECTED_USER:
      return { ...state, item: action.payload, loading: false };
    case UPDATE_SELECTED_USER:
      return { ...state, item: action.payload, loading: false };
    case ENABLE_LOADING:
      return { ...state, loading: action.payload };
    case GET_SUPPLIER:
      return { ...state, suppliers: action.payload, loading: false };
    default:
      return state;
  }
};

export default userReducer;
