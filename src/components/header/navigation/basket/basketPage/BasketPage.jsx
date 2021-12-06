import React, { useState } from "react";
import basketPage from "./BasketPage.module.css";
import { Link } from "react-router-dom";
import { BasketPizza } from "./basketPizza/BasketPizza";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../../../../img/menu/pizza-cart1.jpg";

export function BasketPage() {
  let [pizza, setPizza] = useState([
    {
      id: 1,
      title: "Мексиканская",
      size: "30см",
      logo: logo,
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина,сочная курочка, свежий помидор",
      price: "500р",
    },
    {
      id: 2,
      title: "Мексиканская",
      size: "30см",
      logo: logo,
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина,сочная курочка, свежий помидор",
      price: "500р",
    },
  ]);

  const RemovePizza = (fId) => {
    pizza = pizza.filter((f) => f.id !== fId);
    setPizza(pizza);
  };

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
            {pizza.map((pizza) => (
              <BasketPizza pizza={pizza} RemovePizza={RemovePizza} />
            ))}
          </div>
          <h3>Сумма заказа:</h3>
          <div className={basketPage.toOrder}>
            <button type="submit">Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
}
