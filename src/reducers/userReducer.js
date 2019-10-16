const userReducer = (state = "", action) => {
  switch (action.type) {
    case "updateUser":
      return action.payload.userName;
    default:
      return "no User";
  }
};

export default userReducer;
