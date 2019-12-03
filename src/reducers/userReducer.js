import { UPDATE_USER, SET_USERNAME,CURRENT_USER } from "../actions/user-actions";
import auth from "../services/authService";

const userReducer = (state = auth.getCurrentUser(), action) => {
  switch (action.type) {
    case UPDATE_USER:
      return action.payload.user;
    case SET_USERNAME:
      return action.payload.username;
    default:
      return null;
  }
};

export default userReducer;
