import {
  SELECTED_PRODUCT,
  PRODUCTS,
  PRODUCT_ENABLE_LAODING,
  GET_STOCK
} from "../actions/types";
const initialState = {
  items: [],
  item: {},
  loading: false
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS:
      return { ...state, items: action.payload, loading: false };
    case SELECTED_PRODUCT:
      return { ...state, item: action.payload, loading: false };
    case PRODUCT_ENABLE_LAODING:
      return { ...state, loading: action.payload };
    case GET_STOCK:
      return { ...state, stocks: action.payload, loading: false };
    default:
      return state;
  }
};

export default productReducer;
