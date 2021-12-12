import React from "react";
import basket from "./BasketIcon.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export const BasketIcon = () => {
  return (
    <div className={basket.container}>
      <Link to="/basket" className={basket.btn}>
        <ShoppingCartIcon name="basket" color="#ffffff" fontSize="medium" />
        Корзина: 0р
      </Link>
    </div>
  );
};
