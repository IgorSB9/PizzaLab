import React from "react";
import { Filters } from "./filters/Filters";
import content from "./Content.module.css";
import { Menu } from "./menu/Menu";
import pizza from "../pizza-list";

export const Content = () => {
  let categories = [
    { id: 1, title: "Все пиццы" },
    { id: 2, title: "Вегетарианские" },
    { id: 3, title: "Острые" },
    { id: 4, title: "Мясные" },
  ];

  return (
    <div id="main" className={content.section}>
      <Filters key={categories.id} categories={categories} />
      <Menu pizza={pizza} />
    </div>
  );
};
