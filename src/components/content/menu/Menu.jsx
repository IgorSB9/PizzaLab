import React, { useState } from "react";
import menu from "./Menu.module.css";
import { PizzaCard } from "./pizzaCard/PizzaCard";

export const Menu = (props) => {
  return (
    <div className={menu.section__container}>
      <PizzaCard pizza={props.pizza} />
    </div>
  );
};
