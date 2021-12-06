import React from "react";
import signin from "./SignIn.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
    reset();
  };

  return (
    <div className={signin.page}>
      <div className={signin.body}>
        <div className={signin.content}>
          <div className={signin.close}>
            <Link to="/">
              {" "}
              <CloseIcon className={signin.close__item} />
            </Link>
          </div>
          <h2>Вход</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Почта
              <div>
                <input
                  className={signin.input}
                  {...register("email", {
                    required: "Заполните поле!",
                    pattern: {
                      value: /[A-Za-z]{3}/,
                      message: "Нужно использовать латинские символы",
                    },
                  })}
                />
                <div style={{ height: 20 }}>
                  {errors?.email && <p>{errors?.email.message || "Ошибка!"}</p>}
                </div>
              </div>
            </label>
            <label>
              Пароль
              <div>
                <input
                  className={signin.input}
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: {
                      value: /[A-Za-z]{3}/,
                      message: "Нужно использовать латинские символы",
                    },
                    minLength: {
                      value: 8,
                      message: "Нужно минимум 8 символов",
                    },
                  })}
                />
                <div style={{ height: 20 }}>
                  {errors?.password && (
                    <p>{errors?.password.message || "Заполните поле!"}</p>
                  )}
                </div>
              </div>
            </label>
            <button type="submit">Вход</button>
            <div>
              <Link to="/signUp" className={signin.link}>
                Зарегестрироваться..
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
