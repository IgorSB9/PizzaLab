import React from "react";
import menu from "./Menu.module.css"
import { PizzaCard } from "./pizzaCard/PizzaCard";

export const Menu = () => {
    return <div className={menu.section__container}>
      <PizzaCard />
    </div>
}