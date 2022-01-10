import { pizzaReducer } from "./pizzas/pizzaReducer";
import { basketReducer } from "./basket/basketReducer";
import { userReducer } from "./users/userReducer";
import { combineReducers } from "redux";
import { createStore } from "redux";

const reducers = combineReducers({
  pizza: pizzaReducer,
  user: userReducer,
  basket: basketReducer,
});

export const store = createStore(reducers);

store.subscribe(() => console.log(store.getState().basket));
