import React from "react";
import btnAdd from "./AddPizza.module.css";
import { Link } from "react-router-dom";

export const AddPizza = () => {
  return (
    <>
      <div className={btnAdd.pizza}>
        <Link to="/addPizza" className={btnAdd.pizza__btn}>
          Добавить пиццу +
        </Link>
      </div>
    </>
  );
};
