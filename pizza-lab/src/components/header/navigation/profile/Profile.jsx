import React from "react";
import profile from "./Profile.module.css"

export const Profile = () => {
    return <div className={profile.page__profile}>
    <box-icon name='user' color='#ffffff' ></box-icon>  
        <span>Войти</span>
    </div>
}