import React, { useState } from "react";
import profile from "./ProfilePage.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/users/userSelector";

export function ProfilePage(props) {
  let userInfo = Object.assign([], useSelector(userSelector));

  let [firstName, setFirstName] = useState(
    userInfo.map((info) => info.firstName),
  );
  const [lastName, setLastName] = useState(
    userInfo.map((info) => info.lastName),
  );
  const [email, setEmail] = useState(userInfo.map((info) => info.email));
  const [phone, setPhone] = useState("");

  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    reset();
  };

  const onChangeFirstName = (e) => setFirstName(e.currentTarget.value);
  const onChangeLastName = (e) => setLastName(e.currentTarget.value);
  const onChangeEmail = (e) => setEmail(e.currentTarget.value);
  const onChangePhone = (e) => setPhone(e.currentTarget.value);

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
                  <input
                    onChange={onChangeFirstName}
                    value={firstName}
                    placeholder={"Имя"}
                    {...register("name")}
                  />
                </div>
              </label>
              <label>
                <div>
                  <input
                    onChange={onChangeLastName}
                    value={lastName}
                    placeholder={"Фамилия"}
                    {...register("surname")}
                  />
                </div>
              </label>
              <label>
                <div>
                  <input
                    onChange={onChangePhone}
                    value={phone}
                    placeholder={"Телефон"}
                    {...register("phone")}
                  />
                </div>
              </label>
              <label>
                <div>
                  <input
                    onChange={onChangeEmail}
                    value={email}
                    placeholder={"Email"}
                    {...register("email")}
                  />
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
