import React from "react";
import modal from "./AddPizzaWindow.module.css";
import CancelIcon from "@mui/icons-material/Cancel";

export const AddPizzaModalWindow = ({ active, setActive }) => {
  return (
    <div id="modal" className={modal.window}>
      <div className={modal.window__body}>
        <div className={modal.window__content}>
          <a href="" className={modal.window__close}>
            <CancelIcon onClick={() => setActive(false)} />
          </a>
          <div className={modal.window__titleAdd}>
            <h2>Добавление пиццы</h2>
            <h3>Название пиццы</h3>
            <div className={modal.title}>
              <input
                type="text"
                className={modal.title__input}
                placeholder="..."
              />
            </div>
          </div>
          <div className={modal.window__imgAdd}>
            <h3>Изображение пиццы</h3>
            <div className={modal.title}>
              <input
                type="text"
                className={modal.img__link}
                placeholder="..."
              />
            </div>
          </div>
          <div className={modal.price__add}>
            <div>
              <h3>Стоимость, 30см</h3>
              <input
                type="text"
                className={modal.img__link}
                placeholder="..."
              />
            </div>
            <div>
              <h3>Стоимость, 35см</h3>
              <input
                type="text"
                className={modal.img__link}
                placeholder="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
