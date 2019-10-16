const themeReducer = (state = "", action) => {
  switch (action.type) {
    case "updateTheme":
      return action.payload.color;
    default:
      return "no User";
  }
};

export default themeReducer;
