import auth from "../services/authService";

export const UPDATE_USER = "user:onUpdateUser";
export const GET_USER = "user:onGetUser";
export const SET_USER = "user:onSetUser";
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
