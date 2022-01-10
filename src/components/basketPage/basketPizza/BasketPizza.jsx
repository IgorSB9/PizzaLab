import React from "react";
import basketPizza from "./BasketPizza.module.css";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useDispatch } from "react-redux";
import { basketActions } from "../../../store/basket/basketActions";

export const BasketPizza = (props) => {
  const dispatch = useDispatch();

  let [value, setValue] = React.useState(props.basketPizza.count);
  let [price, setPrice] = React.useState(props.basketPizza.price);

  const decrement = () => {
    props.basketPizza.count = setValue(value - 1);
    setPrice(props.basketPizza.price * (value - 1));
    removePizza();
  };

  const increment = () => {
    props.basketPizza.count = setValue(value + 1);
    setPrice(props.basketPizza.price * (value + 1));
  };

  const removePizza = () => {
    if (value - 1 === 0) {
      dispatch(basketActions.removePizza(props.basketPizza.id));
    }
  };

  return (
    <div className={basketPizza.cart}>
      <div className={basketPizza.basket__item}>
        <div className={basketPizza.close}>
          <CloseIcon
            onClick={() =>
              dispatch(basketActions.removePizza(props.basketPizza.id))
            }
          />
        </div>
        <div className={basketPizza.content}>
          <div>
            <img
              src={props.basketPizza.logo}
              alt="logo"
              className={basketPizza.logo}
            ></img>
          </div>
          <div className={basketPizza.info}>
            <h3>{props.basketPizza.title}</h3>
            <div className={basketPizza.size}>
              <p>{props.basketPizza.size}</p>
            </div>
            <div className={basketPizza.description}>
              <p>{props.basketPizza.description}</p>
            </div>
            <div className={basketPizza.count}>
              <div className={basketPizza.price}>
                <h4>{price} $</h4>
              </div>
              <div className={basketPizza.counter}>
                <RemoveIcon onClick={() => decrement()} />
                <h3>{value}</h3>
                <AddRoundedIcon onClick={() => increment()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
