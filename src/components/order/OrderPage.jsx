import React from "react";
import { BasketPizza } from "../basketPage/basketPizza/BasketPizza";
import order from "./Order.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export function OrderPage(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    reset();
  };
  const [choice, setChoice] = React.useState("");

  const handleChange = (event) => {
    setChoice(event.target.value);
  };

  const RemovePizza = (fId) => {
    props.RemovePizzaFromBasket(fId);
  };

  return (
    <div className={order.page}>
      <div className={order.body}>
        <div className={order.content}>
          <h2>Оформление заказа</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <div>
                <input
                  placeholder={"Город"}
                  className={order.input}
                  {...register("city", {
                    required: true,
                  })}
                />
                <div style={{ height: 20 }}>
                  {errors?.city && <p>Заполните поле!</p>}
                </div>
              </div>
            </label>
            <label>
              <div>
                <input
                  placeholder={"Улица"}
                  className={order.input}
                  {...register("street", {
                    required: true,
                  })}
                />
                <div style={{ height: 20 }}>
                  {errors?.street && <p>Заполните поле!</p>}
                </div>
              </div>
            </label>
            <label>
              <div>
                <input
                  placeholder={"Дом"}
                  className={order.input}
                  {...register("building", {
                    required: "Заполните поле!",
                  })}
                />
                <div style={{ height: 20 }}>
                  {errors?.building && (
                    <p>{errors?.building.message || "Ошибка!"}</p>
                  )}
                </div>
              </div>
            </label>
            <label>
              <div>
                <input
                  placeholder={"Квартира"}
                  className={order.input}
                  {...register("flat", {
                    required: true,
                  })}
                />
                <div style={{ height: 20 }}>
                  {errors?.flat && (
                    <p>{errors?.flat.message || "Заполните поле!"}</p>
                  )}
                </div>
              </div>
            </label>
            <h3>Информация</h3>
            <div>
              <label>
                <div>
                  <input
                    placeholder={"Телефон"}
                    className={order.input}
                    {...register("phone", {
                      required: "Заполните поле!",
                    })}
                  />
                  <div style={{ height: 20 }}>
                    {errors?.phone && (
                      <p>{errors?.phone.message || "Ошибка!"}</p>
                    )}
                  </div>
                </div>
              </label>
              <label>
                <div>
                  <input
                    placeholder={"Email"}
                    className={order.input}
                    {...register("email", {
                      required: "Заполните поле!",
                      pattern: {
                        value: /[A-Za-z]{3}/,
                        message: "Нужно использовать латинские символы",
                      },
                    })}
                  />
                  <div style={{ height: 20 }}>
                    {errors?.email && (
                      <p>{errors?.email.message || "Ошибка!"}</p>
                    )}
                  </div>
                </div>
              </label>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Как можно быстрее"
              />
              <h3>Способ оплаты</h3>
              <div>
                <FormControl variant="filled" sx={{ minWidth: 220 }}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Способ оплаты
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={choice}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>...</em>
                    </MenuItem>
                    <MenuItem value={"Картой курьеру"}>Картой курьеру</MenuItem>
                    <MenuItem value={"Наличкой курьеру"}>
                      Наличкой курьеру
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </form>
          <div>
            <Link to="/">
              <button>Подтвердить заказ</button>
            </Link>
          </div>
        </div>
        <div className={order.items}>
          <h2>Ваш заказ:</h2>
          {/* {props.basket.map((basket) => (
            <BasketPizza basket={basket} RemovePizza={RemovePizza} />
          ))} */}
        </div>
      </div>
    </div>
  );
}
