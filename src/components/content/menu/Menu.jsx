import React from "react";
import menu from "./Menu.module.css";
import { PizzaCard } from "./pizzaCard/PizzaCard";
import { useSelector } from "react-redux";

export const Menu = () => {
  let pizzas = useSelector((store) => store.pizza);

  return (
    <div className={menu.section__container}>
      {pizzas.map((pizza) => (
        <PizzaCard pizza={pizza} />
      ))}
    </div>
  );
};
