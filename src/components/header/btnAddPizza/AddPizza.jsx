import React from "react";
import btnAdd from "./AddPizza.module.css";
import { Routes, Route } from "react-router-dom";
import { AddPizzaWindow } from "../../content/addPizzaWindow/AddPizzaWindow";

export const AddPizza = () => {
  return (
    <div>
      <div className={btnAdd.pizza}>
        <a href="/addPizza" className={btnAdd.pizza__btn}>
          Добавить пиццу +
        </a>
      </div>
      <Routes>
        <Route path="/addPizza" element={<AddPizzaWindow />} />
      </Routes>
    </div>
  );
};
