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

export const PizzaCard = (props) => {
  const [value, setValue] = React.useState("size30");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const NewPizzaItem = {
    title: props.pizza.title,
    logo: props.pizza.logo,
    price30: props.pizza.price30,
    description: props.pizza.description,
    size: value,
  };
  const dispatch = useDispatch();

  return (
    <div className={card.cart}>
      <div key={props.pizza.id} className={card.cart__container}>
        <div className={card.menu__logo}>
          <div className={card.edit}>
            <InfoIcon />
            <CloseIcon
              onClick={() => dispatch(pizzaActions.addNewPizza(NewPizzaItem))}
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
                value="size30"
                control={<Radio />}
                label="30см"
              />
              <FormControlLabel
                value="size35"
                control={<Radio />}
                label="35см"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <h3>Стоимость</h3>
        <div className={card.cart__price}>
          <div className={card.cart__coast}>{props.pizza.price30}</div>
          <div className={card.cart__coast}>{props.pizza.price35}</div>
          <div className={card.pizza__toBasket}>
            <button
              className={card.btn__toBasket}
              onClick={() => dispatch(pizzaActions.addNewPizza(NewPizzaItem))}
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
