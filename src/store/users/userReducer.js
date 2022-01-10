import { userActionsTypes } from "./userActions";

const initialState = {
  user: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionsTypes.ADD_NEW_USER:
      return { ...state, user: [...state.user, action.payload] };
    case userActionsTypes.CHANGE_USER_INFO:
      return { ...state };
    default:
      return state;
  }
};
