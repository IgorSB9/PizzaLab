import React from "react";
import menu from "./Menu.module.css";
import { PizzaCard } from "./pizzaCard/PizzaCard";
import { useSelector } from "react-redux";

export const Menu = () => {
  let pizza = useSelector((state) => state.pizza.pizza);
  return (
    <div className={menu.section__container}>
      {pizza.map((pizza) => (
        <PizzaCard pizza={pizza} />
      ))}
    </div>
  );
};
