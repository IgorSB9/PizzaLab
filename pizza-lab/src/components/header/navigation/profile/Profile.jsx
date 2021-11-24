import React from "react";
import profile from "./Profile.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Profile = () => {
  return (
    <div className={profile.page__profile}>
      <AccountCircleIcon
        name="user"
        color="#ffffff"
        fontSize="large"
      ></AccountCircleIcon>
    </div>
  );
};
