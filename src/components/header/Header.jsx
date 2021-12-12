import React from "react";
import { Link } from "react-router-dom";
import { AddPizza } from "./btnAddPizza/AddPizza";
import header from "./Header.module.css";
import { Logo } from "./logo/Logo";
import { Nav } from "./navigation/Nav";

export const Header = () => {
  return (
    <header id="header">
      <div className={header.container}>
        <Logo />
        <AddPizza />
        <Link to="/profile">
          <button>Профиль</button>
        </Link>
        <Nav />
      </div>
    </header>
  );
};
