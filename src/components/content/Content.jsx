import React from "react";
import { Filters } from "./filters/Filters";
import content from "./Content.module.css";
import { Menu } from "./menu/Menu";

export const Content = (props) => {
  let categories = [
    { id: 1, title: "Все пиццы" },
    { id: 2, title: "Вегетарианские" },
    { id: 3, title: "Острые" },
    { id: 4, title: "Мясные" },
  ];

  return (
    <div id="main" className={content.section}>
      <Filters categories={categories} />
      <Menu pizza={props.pizza} RemovePizza={props.RemovePizza} />
    </div>
  );
};
