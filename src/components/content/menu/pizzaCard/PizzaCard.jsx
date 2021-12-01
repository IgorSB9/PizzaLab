import React from "react";
import card from "./PizzaCard.module.css";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export const PizzaCard = (props) => {
  const [value, setValue] = React.useState("size30");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={card.cart}>
      {props.pizza.map((mPizza) => {
        return (
          <div key={mPizza.id} className={card.cart__container}>
            <div className={card.menu__logo}>
              <CloseIcon>x</CloseIcon>
              <InfoIcon />
              <img src={mPizza.logo} className={card.logo}></img>
            </div>
            <div className={card.menu__title}>
              <h2>{mPizza.title}</h2>
            </div>
            <h3>Размер:</h3>
            <div className={card.radioGroup}>
              <FormControl className={card.formControl} component="fieldset">
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
            <h3>Стоимость:</h3>
            <div className={card.cart__price}>
              <div className={card.cart__coast}>{mPizza.price30}</div>
              <div className={card.cart__coast}>{mPizza.price35}</div>
              <div className={card.pizza__toBasket}>
                <button className={card.btn__toBasket}>В корзину</button>
              </div>
            </div>
            <div className={card.menu__description}>
              <p className={card.description}>{mPizza.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
