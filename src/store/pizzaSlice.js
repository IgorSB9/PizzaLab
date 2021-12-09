import { createSlice } from "@reduxjs/toolkit";
import pizzalist from "../components/pizza-list";

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    pizza: [
      {
        id: 1,
        logo: "logo1",
        title: "Мясная",
        price30: "499",
        price35: "699",
        description:
          "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
      },
      {
        id: 2,
        logo: "logo2",
        title: "Мясная",
        price30: "499",
        price35: "699",
        description:
          "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
      },
      {
        id: 3,
        logo: "logo3",
        title: "Мясная",
        price30: "499",
        price35: "699",
        description:
          "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
      },
      {
        id: 4,
        logo: "logo4",
        title: "Мясная",
        price30: "499",
        price35: "699",
        description:
          "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
      },
      {
        id: 5,
        logo: "logo5",
        title: "Мясная",
        price30: "499",
        price35: "699",
        description:
          "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
      },
      {
        id: 6,
        logo: "logo1",
        title: "Мясная",
        price30: "499",
        price35: "699",
        description:
          "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
      },
      {
        id: 7,
        logo: "logo1",
        title: "Мясная",
        price30: "499",
        price35: "699",
        description:
          "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
      },
    ],
  },
  reducers: {
    AddNewPizza(state, action) {
      state.pizza.push({
        id: new Date(),
        logo: action.payload.logo,
        title: action.payload.title,
        price30: action.payload.price30,
        price35: action.payload.price35,
        description: action.payload.description,
      });
    },
    RemovePizza(state, action) {
      state.pizza = state.pizza.filter((f) => f.id !== action.payload.id);
    },
  },
});

export const { AddNewPizza, RemovePizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
