import { UPDATE_USER } from "../actions/user-actions";

const userReducer = (state = "", action) => {
  switch (action.type) {
    case UPDATE_USER:
      return action.payload.user;
    default:
      return null;
  }
};

export default userReducer;
