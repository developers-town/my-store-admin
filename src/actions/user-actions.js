import auth from "../services/authService";

export const UPDATE_USER = "user:onUpdateUser";
export const GET_USER = "user:onGetUser";
export const SET_USERNAME = "user:onSetUsername";
export const updateUser = newUser => {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  };
};

export const getUser = () => {
  return {
    type: GET_USER,
    payload: {
      user: auth.getCurrentUser()
    }
  };
};
export const setUser = newUsername => {
  return {
    type: SET_USERNAME,
    payload: {
      username: newUsername
    }
  };
};
