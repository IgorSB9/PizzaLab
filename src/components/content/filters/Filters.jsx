import React from "react";
import filter from "./Filters.module.css";

export const Filters = ({ categories }) => {
  return (
    <div className={filter.container}>
      <div className={filter.container__nav}>
        <ul>
          {categories.map((el) => (
            <li key={el.id}>
              <button>{el.title}</button>
            </li>
          ))}
        </ul>
        ;
      </div>
    </div>
  );
};
