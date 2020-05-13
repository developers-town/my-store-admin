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
} from "../actions/types";
const initialState = {
  items: [],
  item: {},
  loading: false,
  message: "",
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
    case SELECTED_STOCK:
      return { ...state, stock: action.payload, loading: false };
    case UPLOAD_IMAGE:
      return { ...state, imageUploaded: action.payload, loading: false };
    case CREATE_PRODUCT:
      return { ...state, prodcutCreated: action.payload, loading: false };
    case GET_CATEGORIES:
      return { ...state, categories: action.payload, loading: false };
    case RESPONSE_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default productReducer;
