
import { SELECTED_PRODUCT } from "../actions/types"
const initialState = {
  items: [],
  item: {},
  loading: true
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return { ...state, item: action.payload, loading: false };
    default:
      return state;
  }
};

export default productReducer;
