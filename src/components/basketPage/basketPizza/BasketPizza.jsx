import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

export const BasketPizza = (props) => {
  const basketPizza = useSelector((state) => state.basket);
  return (
    <div className={basketPizza.cart}>
      <div className={basketPizza.basket__item}>
        <div className={basketPizza.close}>
          <CloseIcon onClick={() => props.RemovePizza(props.basket.id)} />
        </div>
        <div className={basketPizza.content}>
          <div>
            <img
              src={basketPizza.logo}
              alt="logo"
              className={basketPizza.logo}
            ></img>
          </div>
          <div className={basketPizza.info}>
            <h3>{basketPizza.title}</h3>
            <div className={basketPizza.size}>
              <p>{basketPizza.size}</p>
            </div>
            <div className={basketPizza.description}>
              <p>{basketPizza.description}</p>
            </div>
            <div className={basketPizza.count}>
              <div className={basketPizza.price}>
                <h4>{basketPizza.price}</h4>
              </div>
              {/* <div> Количество пицц </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
