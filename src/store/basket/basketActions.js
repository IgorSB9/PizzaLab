export const basketActionsTypes = {
  ADD_NEW_PIZZA: "BASKET.ADD_NEW_PIZZA",
  REMOVE_PIZZA: "BASKET.REMOVE_PIZZA",
};

export const basketActions = {
  addNewPizza: (data) => ({
    type: basketActionsTypes.ADD_NEW_PIZZA,
    payload: data,
  }),
  removePizza: (data) => ({
    type: basketActionsTypes.REMOVE_PIZZA,
    payload: data,
  }),
};
