import React from "react";
import addPizza from "./AddPizzaWindow.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";

export const AddPizzaWindow = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch({
      type: "addNewPizza",
      payload: data,
    });
    reset();
  };

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
