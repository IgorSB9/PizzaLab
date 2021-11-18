import React from "react";
import { Basket } from "./basket/Basket";
import nav from "./Nav.module.css"
import { Profile } from "./profile/Profile";

export const Nav = () => {
    return <div className={nav.page__nav}>
    <Profile />
    <Basket />
    </div>
}