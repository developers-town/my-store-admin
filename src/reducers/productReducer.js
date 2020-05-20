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
  MODAL_CREATE_PRODUCT,
  BUTTON_LOADING,
  CREATE_PRODUCT_UNIT,
  CREATE_STOCK,
} from "../actions/types";
const initialState = {
  items: [],
  item: {},
  brands: [],
  categories: [],
  loading: false,
  message: "",
  buttonLoading: false,
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
      return {
        ...state,
        productCreated: action.payload,
        buttonLoading: false,
        modalStep: "createProductUnit",
      };
    case GET_CATEGORIES:
      return { ...state, categories: action.payload, loading: false };
    case GET_BRANDS:
      return { ...state, brands: action.payload, loading: false };
    case RESPONSE_MESSAGE:
      return { ...state, message: action.payload };
    case MODAL_CREATE_PRODUCT:
      return { ...state, modalStep: action.payload };
    case BUTTON_LOADING:
      return { ...state, buttonLoading: action.payload };
    case CREATE_PRODUCT_UNIT:
      return {
        ...state,
        productUnitCreated: action.payload,
        modalStep: "createStock",
        buttonLoading: false,
      };
    case CREATE_STOCK:
      return {
        ...state,
        stockCreated: action.payload,
        modalStep: "createSuccess",
        buttonLoading: false,
      };
    default:
      return state;
  }
};

export default productReducer;
