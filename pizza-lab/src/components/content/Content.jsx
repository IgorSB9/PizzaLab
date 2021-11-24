import React from "react";
import { Filters } from "./filters/Filters";
import content from "./Content.module.css";
import { Menu } from "./Menu/Menu";

export const Content = () => {
  let categories = ["Все пиццы", "Вегетарианские", "Острые", "Мясные"];
  return (
    <div id="main" className={content.section}>
      <Filters categories={categories} />
      <Menu />
    </div>
  );
};
