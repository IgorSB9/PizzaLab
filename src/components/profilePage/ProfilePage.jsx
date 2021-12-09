import React from "react";
import profile from "./ProfilePage.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export function ProfilePage(props) {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    reset();
  };

  return (
    <div className={profile.page}>
      <div className={profile.body}>
        <div className={profile.content}>
          <h2>Профиль</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Личные данные</h3>
            <div>
              <label>
                <div>
                  <input placeholder={"Имя"} {...register("name")} />
                </div>
              </label>
              <label>
                <div>
                  <input placeholder={"Фамилия"} {...register("surname")} />
                </div>
              </label>
              <label>
                <div>
                  <input placeholder={"Телефон"} {...register("phone")} />
                </div>
              </label>
              <label>
                <div>
                  <input placeholder={"Email"} {...register("email")} />
                </div>
              </label>
            </div>
            <h3>Адрес доставки</h3>
            <label>
              <div>
                <input placeholder={"Город"} {...register("city")} />
              </div>
            </label>
            <label>
              <div>
                <input placeholder={"Улица"} {...register("street")} />
              </div>
            </label>
            <label>
              <div>
                <input placeholder={"Дом"} {...register("building")} />
              </div>
            </label>
            <label>
              <div>
                <input placeholder={"Квартира"} {...register("flat")} />
              </div>
            </label>
          </form>
          <Link to="/">
            <button>Сохранить</button>
          </Link>
        </div>
        <div className={profile.items}>
          <h2>История заказов:</h2>
          {/* <div>.....</div> */}
        </div>
      </div>
    </div>
  );
}
