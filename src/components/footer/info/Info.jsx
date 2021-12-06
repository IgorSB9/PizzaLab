import { Link } from "@mui/material";
import React from "react";
import info from "./Info.module.css";

export const Info = () => {
  return (
    <div className={info.container__links}>
      <h2>Информация</h2>
      <ul>
        <li>
          <Link to="#">О нас</Link>
        </li>
        <li>
          <Link to="#">Вакансии</Link>
        </li>
        <li>
          <Link to="#">Отзывы</Link>
        </li>
        <li>
          <Link to="#">Помощь</Link>
        </li>
        <li>
          <Link to="#">Контакты</Link>
        </li>
      </ul>
    </div>
  );
};
