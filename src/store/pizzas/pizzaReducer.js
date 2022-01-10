import pizzaList from "./pizzaList";
import { pizzaActionsTypes } from "./pizzaActions";

const initialState = {
  pizzas: pizzaList,
};

export const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case pizzaActionsTypes.ADD_NEW_PIZZA:
      return { ...state, pizzas: [...state.pizzas, action.payload] };
    case pizzaActionsTypes.REMOVE_PIZZA:
      const pizzas = state.pizzas.filter((f) => f.id !== action.payload);
      return { ...state, pizzas };
    default:
      return state;
  }
};
