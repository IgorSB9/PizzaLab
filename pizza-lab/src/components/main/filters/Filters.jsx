import React from "react";
import filter from "./Filters.module.css"

export const Filters = () => {
    return <div className={filter.container}>
        <div className={filter.container__nav}>
            <ul>
              <li>
                <a><button className={filter.top__nav_text}>Все пиццы</button></a>
              </li>
              <li>
                <a><button className={filter.top__nav_text}>Вегетарианские</button></a>
              </li>
              <li>
                <a><button className={filter.top__nav_text}>Острые</button></a>
              </li>
              <li>
                  <a><button className={filter.top__nav_text}>Мясные</button></a>
                </li>
            </ul>
    </div>
    </div>
}

