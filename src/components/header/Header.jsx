import React from "react";
import { AddPizza } from "./btnAddPizza/AddPizza";
import header from "./Header.module.css";
import { Logo } from "./logo/Logo";
import { Nav } from "./navigation/Nav";

export const Header = () => {
  return (
    <header id="header" className="header">
      <div className={header.container}>
        <Logo />
        <AddPizza />
        <Nav />
      </div>
    </header>
  );
};
