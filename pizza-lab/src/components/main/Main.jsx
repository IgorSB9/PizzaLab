import React from "react";
import main from "./Main.module.css"

const Main = () => {
    return <div id="main" className={main.section}>
    <div className={main.container}>
        <div className={main.top__nav}>
            <ul>
              <li>
                <a><button className={main.top__nav_text}>Все пиццы</button></a>
              </li>
              <li>
                <a><button className={main.top__nav_text}>Вегетарианские</button></a>
              </li>
              <li>
                <a><button className={main.top__nav_text}>Острые</button></a>
              </li>
              <li>
                  <a><button className={main.top__nav_text}>Мясные</button></a>
                </li>
            </ul>
    </div>
    </div>
    <div className={main.section__container}>
      <div className = {main.cart__container}>
            <div className={main.menu__logo}>
                <img url="img/menu/pizza-cart.jpg" className={main.logo}></img>
            </div>
            <div className={main.menu__title}>
                <h2>Pizza #1</h2>
            </div>
            <div className={main.btn__pizza}>
                <button className={main.btn__size}>30см</button>
                <button className={main.btn__size}>35см</button>
            </div>
            <div className={main.cart__price}>
                <div className={main.cart__coast}>599р</div>
                <div className={main.pizza__toBasket}>
                    <button className={main.pizza__toBasket}>В корзину</button>
                </div>
            </div>
            <div className={main.menu__description}>
                <p>Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор</p>
            </div>
        </div>        
    </div>
</div>
}


export default Main;