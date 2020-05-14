import {
  SELECTED_PRODUCT,
  PRODUCTS,
  PRODUCT_ENABLE_LAODING,
  GET_STOCK,
  SELECTED_STOCK,
  UPLOAD_IMAGE,
  CREATE_PRODUCT,
  GET_CATEGORIES,
  RESPONSE_MESSAGE,
  GET_BRANDS,
} from "./types";
import { actionGet, actionPost } from "../services/actionCallApi";

export const selectedProduct = (id) => async (dispatch) => {
  const response = await actionGet("product/" + id);
  dispatch({
    type: SELECTED_PRODUCT,
    payload: response.data.payload,
  });
};
export const get_products = () => async (dispatch) => {
  const response = await actionGet("product");
  // console.log(response);
  dispatch({
    type: PRODUCTS,
    payload: response.data.payload,
  });
};
export const productEnableLoading = () => (dispatch) => {
  dispatch({
    type: PRODUCT_ENABLE_LAODING,
    payload: true,
  });
};

export const getStock = () => async (dispatch) => {
  const res = await actionGet("stock");
  dispatch({
    type: GET_STOCK,
    payload: res.data.payload,
  });
};

export const selectedStock = (id) => async (dispatch) => {
  const response = await actionGet("/stock" + id);
  dispatch({
    type: SELECTED_STOCK,
    payload: response.data.payload,
  });
};

export const uploadImage = (data) => {
  return async (dispatch) => {
    const response = await actionPost("image/upload", data);
    dispatch({
      type: UPLOAD_IMAGE,
      payload: response.data,
    });
  };
};

export const createProduct = async (data) => async (dispatch) => {
  const response = await actionPost("product", data);
  console.log(response);
  
  dispatch({
    type: CREATE_PRODUCT,
    payload: response.data.payload,
  });
  dispatch({
    type: RESPONSE_MESSAGE,
    payload: response.data.message,
  });
};

export const getCategories = () => async (dispatch) => {
  const response = await actionGet("categories");
  dispatch({
    type: GET_CATEGORIES,
    payload: response.data.payload,
  });
};

export const getBrands = async () => {
  const response = await actionGet("brands");

  return {
    type: GET_BRANDS,
    payload: response.data.payload,
  }
}