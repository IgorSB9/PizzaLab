import React from "react";
import basket from "./Basket.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Basket = () => {
  return (
    <div className={basket.page__basket}>
      <ShoppingCartIcon
        name="basket"
        color="#ffffff"
        fontSize="large"
      ></ShoppingCartIcon>
    </div>
  );
};
