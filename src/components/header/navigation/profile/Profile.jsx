import React from "react";
import profile from "./Profile.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Routes, Route } from "react-router-dom";
import { Regisration } from "../../../registration/Registration";

export const Profile = () => {
  return (
    <div>
      <a href="/regisration">
        <div className={profile.page__profile}>
          <AccountCircleIcon name="user" color="#ffffff" fontSize="large" />
        </div>
      </a>
      <Routes>
        <Route path="/regisration" element={<Regisration />} />
      </Routes>
    </div>
  );
};
