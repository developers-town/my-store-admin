import {
  CURRENT_USER,
  GET_USERS,
  UPDATE_USER,
  SELECTED_USER,
  ENABLE_LOADING,
  UPDATE_SELECTED_USER,
  LOGIN_USER,
  LOGIN_ERROR,
  GET_SUPPLIER
} from "./types";
import { actionGet, actionPut, actionPost } from "../services/actionCallApi";

export const loginUser = user => async dispatch => {
  try {
    const res = await actionPost("staff/login", user);
    if (res.data.payload.token) {
      await localStorage.setItem("userToken", res.data.payload.token);
    }
    dispatch({
      type: LOGIN_USER,
      payload: "unknow"
    });
    dispatch({
      type: LOGIN_ERROR,
      payload: false
    });
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
      payload: true
    });
    dispatch({
      type: ENABLE_LOADING,
      payload: false
    });
  }
};

export const getUser = () => async dispatch => {
  const response = await actionGet("user");
  dispatch({
    type: GET_USERS,
    payload: response.data.payload
  });
};

export const currentUser = () => async dispatch => {
  const response = await actionGet("staff/profile");
  console.log(response);
  dispatch({
    type: CURRENT_USER,
    payload: response.data.payload
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
export const enableLoading = () => dispatch => {
  dispatch({
    type: ENABLE_LOADING,
    payload: true
  });
};
export const updateSlectedUser = (id, user) => async dispatch => {
  const response = await actionPut("user/" + id, user);
  dispatch({
    type: UPDATE_SELECTED_USER,
    payload: response.data.payload
  });
};
export const getSupplier = () => async dispatch => {
  const response = await actionGet("supplier");
  dispatch({
    type: GET_SUPPLIER,
    payload: response.data.payload
  });
};
