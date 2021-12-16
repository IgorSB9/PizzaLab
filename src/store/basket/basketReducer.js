import { basketActionsTypes } from "./basketActions";

let initialState = {
  basket: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case basketActionsTypes.REMOVE_PIZZA:
      state.basket = state.basket.filter((f) => f.id !== action.payload);
      return state.basket;
    case basketActionsTypes.ADD_NEW_PIZZA:
      return { ...state, basket: action.payload };
    default:
      return state;
  }
};
