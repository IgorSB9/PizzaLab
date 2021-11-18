import React from "react";
import "./Footer.module.css"


export const Footer = () => {
    return <footer id="footer" class="footer">
    <div class="footer-container">
        <div class="footer-container__about">
            <h2>О нас</h2>
            <p>рррррррррррррр ррррррррррр рррррррррррр рррррр рррррррр рррррр ррррррр  ррррррррррррр рррррррррррррррррррррррррррррррррррррррр ррррррррррррррррррррр рррррррррррррррррррррррррррррр ррррррррррррррррррррррррррррррррррррррррррррррррр рррррррррррррррррррррррррррррррр</p>
            <ul class="footer-container__soc">
                <box-icon name='vk' type='logo' color='#ffffff' ></box-icon>
                <box-icon name='instagram' type='logo' color='#ffffff' ></box-icon>
            </ul>
        </div>
        <div class="footer-container__links">
            <h2>Информация</h2>
            <ul>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Вакансии</a></li>
                <li><a href="#">Отзывы</a></li>
                <li><a href="#">Помощь</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </div>
    </div>
</footer>
}