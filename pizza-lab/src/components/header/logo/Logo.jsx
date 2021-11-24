import React from "react";
import logoImg from "../../../img/pizza_icon.png";
import logo from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={logo.page__logo}>
      <a href="#">
        <img src={logoImg} alt="logo" class={logo.logo} />
      </a>
    </div>
  );
};
