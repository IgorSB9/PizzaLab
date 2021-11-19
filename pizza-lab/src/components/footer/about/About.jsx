import React from "react";
import about from "./About.module.css"


export const About = () => {
    return <div class={about.container__about}>
    <h2>О нас</h2>
    <p>рррррррррррррр ррррррррррр рррррррррррр рррррр рррррррр рррррр ррррррр  ррррррррррррр рррррррррррррррррррррррррррррррррррррррр ррррррррррррррррррррр рррррррррррррррррррррррррррррр ррррррррррррррррррррррррррррррррррррррррррррррррр рррррррррррррррррррррррррррррррр</p>
    <ul class={about.container__soc}>
        <li><a><box-icon name='vk' type='logo' color='#ffffff' ></box-icon></a></li>
        <li><a><box-icon name='instagram' type='logo' color='#ffffff' ></box-icon></a></li>
    </ul>
</div>
}