import { Link } from "@mui/material";
import React from "react";
import logoImg from "../../../img/pizza_icon.png";
import logo from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={logo.page__logo}>
      <Link to="/">
        <img src={logoImg} alt="logo" className={logo.logo} />
      </Link>
    </div>
  );
};
