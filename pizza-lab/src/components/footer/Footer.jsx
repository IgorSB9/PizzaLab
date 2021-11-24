import React from "react";
import { About } from "./about/About";
import footer from "./Footer.module.css";
import { Info } from "./info/Info";

export const Footer = () => {
  return (
    <footer id="footer" class={footer.footer}>
      <div class={footer.container}>
        <About />
        <Info />
      </div>
    </footer>
  );
};
