import React from "react";
import info from "./Info.module.css"


export const Info = () => {
    return <div class={info.container__links}>
    <h2>Информация</h2>
    <ul>
        <li><a href="#">О нас</a></li>
        <li><a href="#">Вакансии</a></li>
        <li><a href="#">Отзывы</a></li>
        <li><a href="#">Помощь</a></li>
        <li><a href="#">Контакты</a></li>
    </ul>
</div>
}