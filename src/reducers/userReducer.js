import { UPDATE_USER } from "../actions/user-actions";
import auth from "../services/authService";

const userReducer = (state = auth.getCurrentUser(), action) => {
  switch (action.type) {
    case UPDATE_USER:
      return action.payload.user;
    default:
      return state;
  }
};

export default userReducer;
