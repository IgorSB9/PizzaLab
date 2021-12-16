import React from "react";
import menu from "./Menu.module.css";
import { PizzaCard } from "./pizzaCard/PizzaCard";
import { useSelector } from "react-redux";
import { pizzaSelector } from "../../../store/pizzas/pizzaSelector";

export const Menu = () => {
  let pizzas = useSelector(pizzaSelector());

  return (
    <div className={menu.section__container}>
      {pizzas.map((pizza) => (
        <PizzaCard pizza={pizza} />
      ))}
    </div>
  );
};
