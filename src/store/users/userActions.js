export const userActionsTypes = {
  ADD_NEW_USER: "USERS.ADD_NEW_USER",
};

export const userActions = {
  addNewPizza: (data) => ({
    type: userActionsTypes.ADD_NEW_USER,
    payload: data,
  }),
};
