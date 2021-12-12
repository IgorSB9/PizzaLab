import React from "react";
import profile from "./ProfileIcon.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

export const ProfileIcon = () => {
  return (
    <>
      <Link to="/signUp">
        <div className={profile.container}>
          <button className={profile.btn}>
            <AccountCircleIcon
              name="user"
              color="#ffffff"
              fontSize="medium"
            ></AccountCircleIcon>
            Войти
          </button>
        </div>
      </Link>
    </>
  );
};
