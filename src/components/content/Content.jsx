import React from "react";
import content from "./Content.module.css";
import { Menu } from "./menu/Menu";

export const Content = (props) => {
  return (
    <div id="main" className={content.section}>
      <Menu pizza={props.pizza} RemovePizza={props.RemovePizza} />
    </div>
  );
};
