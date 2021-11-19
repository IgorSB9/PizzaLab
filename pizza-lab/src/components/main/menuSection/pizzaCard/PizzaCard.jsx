import React from "react";
import card from "./PizzaCard.module.css"

export const PizzaCard = () => {
    return <div className = {card.cart__container}>
    <div className={card.menu__logo}>
        <img url="img/menu/pizza-cart.jpg" className={card.logo}></img>
    </div>
    <div className={card.menu__title}>
        <h2>Pizza #1</h2>
    </div>
    <div className={card.btn__pizza}>
        <button className={card.btn__size}>30см</button>
        <button className={card.btn__size}>35см</button>
    </div>
    <div className={card.cart__price}>
        <div className={card.cart__coast}>599р</div>
        <div className={card.pizza__toBasket}>
            <button className={card.btn__toBasket}>В корзину</button>
        </div>
    </div>
    <div className={card.menu__description}>
        <p>Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор</p>
    </div>
</div>        
}