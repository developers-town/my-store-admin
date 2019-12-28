import {
  CURRENT_USER,
  GET_USER,
  UPDATE_USER,
  SELECTED_USER,
  SET_LOADING,
  UPDATE_SELECTED_USER
} from "./types";
import auth from "../services/authService";
import { actionGet, actionPut } from "../services/actionCallApi";

export const getUser = () => dispatch => {
  dispatch({
    type: GET_USER,
    payload: {
      user: auth.currentUser()
    }
  });
};

export const currentUser = user => dispatch => {
  dispatch({
    type: CURRENT_USER,
    payload: user
  });
};
export const selectedUser = selected_user => async dispatch => {
  const response = await actionGet("user/" + selected_user);
  dispatch({
    type: SELECTED_USER,
    payload: response.data.payload
  });
};
export const updateUser = user => dispatch => {
  dispatch({
    type: UPDATE_USER,
    payload: user
  });
};
export const setLoading = status => dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: status
  });
};
export const updateSlectedUser = (id, user) => async dispatch => {
  // console.log("_____id" + id, "_______user" + user);
  const response = await actionPut("user/" + id, user);
  dispatch({
    type: UPDATE_SELECTED_USER,
    payload: response.data.payload
  });
};
