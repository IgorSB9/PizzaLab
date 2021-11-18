import React from "react";
import main from "./Main.module.css"

const Main = () => {
    return <div id="main" className={main.main-section}>
    <div className={main.main-section__container}>
        <div className={main.section-top__nav}>
            <ul className={main.section-top__nav-ul}>
              <li className={main.section-top__nav-li}>
                <a className={main.section-top__nav-link}>
                  <button className={main.section-top__nav-text}>Все пиццы</button>
                </a>
              </li>
              <li className={main.section-top__nav-li}>
                <a className={main.section-top__nav-link}>
                  <button className={main.section-top__nav-text}>Вегетарианские</button>
                </a>
              </li>
              <li className={main.section-top__nav-li}>
                <a className={main.section-top__nav-link}>
                  <button className={main.section-top__nav-text}>Острые</button>
                </a>
              </li>
              <li className={main.section-top__nav-li}>
                <a className={main.section-top__nav-link}>
                  <button className={main.section-top__nav-text}>Мясные</button>
                </a></li>
            </ul>
    </div>
    </div>
    <div className={main.menu-section__container}>
      <div className = {main.pizza-cart__container}>
            <div className={main.pizza-menu__logo}>
                <img url="img/menu/pizza-cart.jpg" className={main.card-logo}></img>
            </div>
            <div className={main.pizza-menu__title}>
                <h2>Pizza #1</h2>
            </div>
            <div className={main.btn__pizza}>
                <button className={main.btn__pizza-size}>30см</button>
                <button className={main.btn__pizza-size}>35см</button>
            </div>
            <div className={main.pizza-cart__price}>
                <div className={main.pizza-cart__coast}>599р</div>
                <div className={main.pizza__to-basket}>
                    <button className={main.btn-pizza__to-basket}>В корзину</button>
                </div>
            </div>
            <div className={main.pizza-menu__description}>
                <p>Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор</p>
            </div>
        </div>        
    </div>
    <div className={main.menu-section__container}>
      <div className = {main.pizza-cart__container}>
            <div className={main.pizza-menu__logo}>
                <img url="img/menu/pizza-cart.jpg" className={main.card-logo}></img>
            </div>
            <div className={main.pizza-menu__title}>
                <h2>Pizza #1</h2>
            </div>
            <div className={main.btn__pizza}>
                <button className={main.btn__pizza-size}>30см</button>
                <button className={main.btn__pizza-size}>35см</button>
            </div>
            <div className={main.pizza-cart__price}>
                <div className={main.pizza-cart__coast}>599р</div>
                <div className={main.pizza__to-basket}>
                    <button className={main.btn-pizza__to-basket}>В корзину</button>
                </div>
            </div>
            <div className={main.pizza-menu__description}>
                <p>Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор</p>
            </div>
        </div>        
    </div>
</div>
}


export default Main;