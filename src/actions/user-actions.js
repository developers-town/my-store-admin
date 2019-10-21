export const UPDATE_USER = "user:onUpdateUser";

export const updateUser = newUser => {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  };
};
