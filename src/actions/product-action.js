import {
  SELECTED_PRODUCT,
  PRODUCTS,
  PRODUCT_ENABLE_LAODING,
  GET_STOCK
} from "./types";
import { actionGet } from "../services/actionCallApi";

export const selectedProduct = id => async dispatch => {
  const response = await actionGet("product/" + id);
  dispatch({
    type: SELECTED_PRODUCT,
    payload: response.data.payload
  });
};
export const get_products = () => async dispatch => {
  const response = await actionGet("product");
  // console.log(response);
  dispatch({
    type: PRODUCTS,
    payload: response.data.payload
  });
};
export const productEnableLoading = () => dispatch => {
  dispatch({
    type: PRODUCT_ENABLE_LAODING,
    payload: true
  });
};

export const getStock = () => async dispatch => {
  const res = await actionGet("stock");
  dispatch({
    type: GET_STOCK,
    payload: res.data.payload
  });
};
