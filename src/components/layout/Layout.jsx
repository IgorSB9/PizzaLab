import React from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const Layout = (props) => {
  return (
    <div className="app">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
