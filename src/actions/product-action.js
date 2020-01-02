import { SELECTED_PRODUCT } from "./types";
import {actionGet} from "../services/actionCallApi"

export const selectedProduct = id => async dispatch => {
    const response = await actionGet("product/" + id);
    dispatch({
      type: SELECTED_PRODUCT,
      payload: response.data.payload
    });
  };