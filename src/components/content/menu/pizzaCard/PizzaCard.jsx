import React from "react";
import card from "./PizzaCard.module.css";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch } from "react-redux";
import { pizzaActions } from "../../../../store/pizzas/pizzaActions";
import { basketActions } from "../../../../store/basket/basketActions";

export const PizzaCard = (props) => {
  const [value, setValue] = React.useState("30 см");
  const [price, setPrice] = React.useState(props.pizza.price30);

  const handleChange = (event) => {
    setValue(event.target.value);

    event.target.value === "30 см"
      ? setPrice(props.pizza.price30)
      : setPrice(props.pizza.price35);
  };

  const dispatch = useDispatch();

  const newBasketPizza = {
    id: Math.random(),
    title: props.pizza.title,
    logo: props.pizza.logo,
    price: price,
    count: 1,
    size: value,
    description: props.pizza.description,
  };

  return (
    <div className={card.cart}>
      <div key={props.pizza.id} className={card.cart__container}>
        <div className={card.menu__logo}>
          <div className={card.edit}>
            <InfoIcon />
            <CloseIcon
              onClick={() => dispatch(pizzaActions.removePizza(props.pizza.id))}
            />
          </div>
          <img src={props.pizza.logo} alt="logo" className={card.logo}></img>
        </div>
        <div className={card.menu__title}>
          <h2>{props.pizza.title}</h2>
        </div>
        <div className={card.radioGroup}>
          <FormControl className={card.formControl} component="fieldset">
            <h3>Размер</h3>
            <RadioGroup
              row
              aria-label="gender"
              name="row-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="30 см"
                control={<Radio />}
                label="30см"
              />
              <FormControlLabel
                value="35 см"
                control={<Radio />}
                label="35см"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <h3>Стоимость</h3>
        <div className={card.cart__price}>
          <div className={card.cart__coast}>{price} $</div>
          <div className={card.pizza__toBasket}>
            <button
              className={card.btn__toBasket}
              onClick={() =>
                dispatch(basketActions.addNewPizza(newBasketPizza))
              }
            >
              В корзину
            </button>
          </div>
        </div>
        <div className={card.menu__description}>
          <p className={card.description}>{props.pizza.description}</p>
        </div>
      </div>
    </div>
  );
};
