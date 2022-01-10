import React from "react";
import basketPage from "./BasketPage.module.css";
import { Link } from "react-router-dom";
import { BasketPizza } from "./basketPizza/BasketPizza";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { basketSelector } from "../../store/basket/basketSelector";

export function BasketPage() {
  let basketPizzas = useSelector(basketSelector);

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
            {basketPizzas.length === 0 ? (
              <div className={basketPage.error}>
                <h3>В корзине ничего нет</h3>
              </div>
            ) : (
              basketPizzas.map((basketPizza) => (
                <BasketPizza basketPizza={basketPizza} />
              ))
            )}
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
