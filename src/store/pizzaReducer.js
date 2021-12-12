import pizzaList from "./pizzaList";

const addNewPizza = "addNewPizza";
const removePizza = "removePizza";

const pizzaReducer = (state = pizzaList, action) => {
  switch (action.type) {
    case addNewPizza:
      state.push({
        id: new Date(),
        logo: action.payload.logo,
        title: action.payload.title,
        price30: action.payload.price30,
        price35: action.payload.price35,
        description: action.payload.description,
      });
      return state;
    case removePizza:
      state = state.filter((f) => f.id !== action.payload.id);
      return state;
    default:
      return state;
  }
};

export default pizzaReducer;
