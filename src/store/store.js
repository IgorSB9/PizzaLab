import pizzaReducer from "./pizzaReducer";
import basketReducer from "./basketReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import { createStore } from "redux";

const reducers = combineReducers({
  pizza: pizzaReducer,
  user: userReducer,
});

export const store = createStore(reducers);
