import React from "react";
import basketPizza from "./BasketPizza.module.css";
import CloseIcon from "@mui/icons-material/Close";

export const BasketPizza = (props) => {
  return (
    <div className={basketPizza.cart}>
      <div className={basketPizza.basket__item}>
        <div className={basketPizza.close}>
          <CloseIcon onClick={() => props.RemovePizza(props.basket.id)}>
            X
          </CloseIcon>
        </div>
        <div className={basketPizza.content}>
          <div>
            <img
              src={props.basket.logo}
              alt="logo"
              className={basketPizza.logo}
            ></img>
          </div>
          <div className={basketPizza.info}>
            <h3>{props.basket.title}</h3>
            <div className={basketPizza.size}>
              <p>{props.basket.size}</p>
            </div>
            <div className={basketPizza.description}>
              <p>{props.basket.description}</p>
            </div>
            <div className={basketPizza.count}>
              <div className={basketPizza.price}>
                <h4>{props.basket.price}</h4>
              </div>
              {/* <div> Количество пицц </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
