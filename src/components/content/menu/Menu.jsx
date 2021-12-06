import React from "react";
import menu from "./Menu.module.css";
import { PizzaCard } from "./pizzaCard/PizzaCard";

export const Menu = (props) => {
  return (
    <div className={menu.section__container}>
      {props.pizza.map((pizza) => (
        <PizzaCard pizza={pizza} RemovePizza={props.RemovePizza} />
      ))}
    </div>
  );
};
