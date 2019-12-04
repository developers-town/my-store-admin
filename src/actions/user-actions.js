import {CURRENT_USER, GET_USER,UPDATE_USER } from "./types";
import auth from "../services/authService";

export const getUser = () => dispatch => {
  dispatch({
    type: GET_USER,
    payload: {
      user: auth.currentUser()
    }
  });
};

export const currentUser = id => dispatch => {
  dispatch({
    type: CURRENT_USER,
    payload: id
  });
};
export const updateUser  = user => dispatch => {
  dispatch({
    type: UPDATE_USER,
    payload: user
  });
};