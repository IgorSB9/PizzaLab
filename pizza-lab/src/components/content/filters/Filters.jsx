import React from "react";
import filter from "./Filters.module.css";

export const Filters = ({ categories }) => {
  return (
    <div className={filter.container}>
      {console.log(categories)}
      <div className={filter.container__nav}>
        <ul>
          {categories.map((el) => (
            <li>
              <button className={filter.top__nav_text}>{el}</button>
            </li>
          ))}
        </ul>
        ;
      </div>
    </div>
  );
};
