import React, { useState } from "react";
import addPizza from "./AddPizzaWindow.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import menu from "../../pizza-list";
import CloseIcon from "@mui/icons-material/Close";

export const AddPizzaWindow = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  // let [newMenu, setNewMenu] = useState(menu);

  const onSubmit = (data) => {
    props.AddNewPizza(data);
    // console.log(data);
    // setNewMenu(newMenu.push(data));
    reset();
    // localStorage.setItem("title", data.title);
    // localStorage.setItem("logo", data.logo);
    // localStorage.setItem("price30", data.price30);
    // localStorage.setItem("price35", data.price35);
    // localStorage.setItem("description", data.description);
    // reset();
    // localStorage.clear();
  };

  // const newPizzaItem = (pizza) => {
  //   let newTitle = localStorage.getItem("title");
  //   let newLogo = localStorage.getItem("logo");
  //   let newPice30 = localStorage.getItem("price30");
  //   let newPrice35 = localStorage.getItem("price35");
  //   let newDescription = localStorage.getItem("description");
  //   let newItem = [
  //     { title: newTitle },
  //     { logo: newLogo },
  //     { pice30: newPice30 },
  //     { price35: newPrice35 },
  //     { description: newDescription },
  //   ];
  //   return console.log(newItem);
  // };
  // newPizzaItem();

  return (
    <div className={addPizza.window}>
      <div className={addPizza.window__body}>
        <div className={addPizza.window__content}>
          <Link to="/" className={addPizza.window__close}>
            <CloseIcon className={addPizza.window__close} />
          </Link>
          <h2>Добавление пиццы</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Название пиццы</h3>
            <input
              className={addPizza.input}
              {...register("title", {
                required: true,
              })}
            />
            <div style={{ height: 20 }}>
              {errors?.title && <p>Заполните поле!</p>}
            </div>

            <h3>Изображение пиццы</h3>
            <input
              className={addPizza.input}
              {...register("logo", {
                required: true,
              })}
            />
            <div style={{ height: 20 }}>
              {errors?.logo && <p>Заполните поле!</p>}
            </div>

            <div>
              <h3>Стоимость, 30см</h3>
              <input
                className={addPizza.input}
                {...register("price30", {
                  required: true,
                })}
              />
              <div style={{ height: 20 }}>
                {errors?.price30 && <p>Заполните поле!</p>}
              </div>
            </div>
            <div>
              <h3>Стоимость, 35см</h3>
              <input
                className={addPizza.input}
                {...register("price35", {
                  required: true,
                })}
              />
              <div style={{ height: 20 }}>
                {errors?.price35 && <p>Заполните поле!</p>}
              </div>
            </div>
            <h3>Описание</h3>
            <input
              className={addPizza.input}
              {...register("description", {
                required: true,
              })}
            />
            <div style={{ height: 20 }}>
              {errors?.description && <p>Заполните поле!</p>}
            </div>
            <div className={addPizza.btn}>
              <button type="submit">Добавить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
