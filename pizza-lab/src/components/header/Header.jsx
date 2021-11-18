import React from "react";
import header from "./Header.module.css"

export const Header = () => {
    return <header id="header" className="header">
    <div className={header.header__container}>
        <div className={header.header-page__logo}>
           <img src = "img/pizza_logo.png" alt='logo' class={header.header__logo}/>
        </div>
        <div class={header.add-pizza}>
            <button className={header.add-pizza__btn}>Добавить пиццу +</button>
        </div>
        <div className={header.header-page__nav}>
        <div className={header.header-page__profile}>
        <box-icon name='user' color='#ffffff' ></box-icon>  
            <span>Войти</span>
        </div>
        <div className={header.header-page__basket}>
        <box-icon name='basket' color='#ffffff' ></box-icon>
            </div>
        </div>
</div>   
</header>
}