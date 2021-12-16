export const pizzaActionsTypes = {
  ADD_NEW_PIZZA: "PIZZAS.ADD_NEW_PIZZA",
  REMOVE_PIZZA: "PIZZAS.REMOVE_PIZZA",
};

export const pizzaActions = {
  addNewPizza: (data) => ({
    type: pizzaActionsTypes.ADD_NEW_PIZZA,
    payload: data,
  }),
  removePizza: (data) => ({
    type: pizzaActionsTypes.REMOVE_PIZZA,
    payload: data,
  }),
};
