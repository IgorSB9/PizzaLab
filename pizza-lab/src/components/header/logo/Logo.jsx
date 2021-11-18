import React from "react";
import logo from "./Logo.module.css"

export const Logo = () => {
    return <div className={logo.page__logo}>
    <img src = "../../../img/pizza_icon.jpg" alt='logo' class={logo.logo}/>
 </div>
}
