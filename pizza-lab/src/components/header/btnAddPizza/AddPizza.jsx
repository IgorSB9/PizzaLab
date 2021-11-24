import React, { useState } from "react";
import btnAdd from "./AddPizza.module.css";
import { AddPizzaModalWindow } from "./addPizzaWindow/AddPizzaWindow";

export const AddPizza = () => {
  // let [modalActive, setModalActive] = useState(true);

  return (
    <div class={btnAdd.pizza}>
      <button
        className={btnAdd.pizza__btn}
        // onClick={() => setModalActive(true)}
      >
        Добавить пиццу +
      </button>
      {/* <AddPizzaModalWindow active={modalActive} setActive={setModalActive} /> */}
    </div>
  );
};
