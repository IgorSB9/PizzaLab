import React from "react";
import card from "./PizzaCard.module.css";

export const PizzaCard = (props) => {
  //   let item = {
  //     title: props.title,
  //     logo: props.logo,
  //     price30: props.price30,
  //     price35: props.price35,
  //     description: props.description,
  //   };
  return (
    <div className={card.cart}>
      {props.pizza.map((newPizza) => {
        return (
          <div className={card.cart__container}>
            <div className={card.menu__logo}>
              <img url={newPizza.logo} className={card.logo}></img>
            </div>
            <div className={card.menu__title}>
              <h2>{newPizza.title}</h2>
            </div>
            <div className={card.btn__pizza}>
              <button className={card.btn__size}>30см</button>
              <button className={card.btn__size}>35см</button>
            </div>
            <div className={card.cart__price}>
              <div className={card.cart__coast}>{newPizza.price30}</div>
              <div className={card.cart__coast}>{newPizza.price35}</div>
              <div className={card.pizza__toBasket}>
                <button className={card.btn__toBasket}>В корзину</button>
              </div>
            </div>
            <div className={card.menu__description}>
              <p>{newPizza.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
