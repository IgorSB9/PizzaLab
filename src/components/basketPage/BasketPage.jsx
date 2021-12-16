import React from "react";
import basketPage from "./BasketPage.module.css";
import { Link } from "react-router-dom";
import { BasketPizza } from "./basketPizza/BasketPizza";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

export function BasketPage() {
  const basketPizza = useSelector((store) => store.ba);

  return (
    <div className={basketPage.page}>
      <div className={basketPage.body}>
        <div className={basketPage.content}>
          <Link to="/">
            <CloseIcon className={basketPage.close} />
          </Link>
          <div className={basketPage.title}>
            <h2>Корзина</h2>
          </div>
          <div className={basketPage.item}>
            {basketPizza.map((basket) => (
              <BasketPizza basket={basket} />
            ))}
          </div>
          <h3>Сумма заказа:</h3>
          <div className={basketPage.toOrder}>
            <Link to="/order">
              <button type="submit">Оформить заказ</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
