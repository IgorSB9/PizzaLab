export const userActionsTypes = {
  ADD_NEW_USER: "USERS.ADD_NEW_USER",
  CHANGE_USER_INFO: "CHANGE_USER_INFO",
};

export const userActions = {
  addNewUser: (data) => ({
    type: userActionsTypes.ADD_NEW_USER,
    payload: data,
  }),
  changeUserInfo: (data) => ({
    type: userActionsTypes.ADD_NEW_USER,
    payload: data,
  }),
};
