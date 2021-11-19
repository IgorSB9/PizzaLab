import React from "react";
import { Filters } from "./filters/Filters";
import main from "./Main.module.css"
import { Menu } from "./menuSection/Menu";

export const Main = () => {
    return <div id="main" className={main.section}>
            <Filters />
            <Menu />
</div>
}