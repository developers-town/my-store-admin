import { CURRENT_USER } from "../actions/user-actions";
const initState = {
  itmes: [],
  item: {}
};
const currentUser = (state = initState, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return action.payload;
    default:
      return null;
  }
};

export default currentUser;
