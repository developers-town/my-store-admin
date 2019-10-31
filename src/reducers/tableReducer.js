import { SET_TABLE } from "../actions/table-actions";

const tableReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TABLE:
      return action.payload.table;
    default:
      const table = {
        data: []
      };
      return table;
  }
};

export default tableReducer;
