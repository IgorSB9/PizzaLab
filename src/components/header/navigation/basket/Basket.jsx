import React from "react";
import basket from "./Basket.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export const Basket = () => {
  return (
    <div className={basket.container}>
      <Link to="/basket" className={basket.btn}>
        <ShoppingCartIcon
          name="basket"
          color="#ffffff"
          fontSize="medium"
        ></ShoppingCartIcon>
        Корзина: 0р
      </Link>
    </div>
  );
};
