import React from "react";
import btnAdd from "./AddPizza.module.css";

export const AddPizza = () => {
  return (
    <div className={btnAdd.pizza}>
      <button className={btnAdd.pizza__btn}>Добавить пиццу +</button>
    </div>
  );
};
