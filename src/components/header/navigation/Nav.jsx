import React from "react";
import { BasketIcon } from "./basketIcon/BasketIcon";
import nav from "./Nav.module.css";
import { ProfileIcon } from "./profileIcon/ProfileIcon";

export const Nav = () => {
  return (
    <div className={nav.page__nav}>
      <ProfileIcon />
      <BasketIcon />
    </div>
  );
};
