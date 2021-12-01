import React from "react";
import about from "./About.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export const About = () => {
  return (
    <div className={about.container__about}>
      <h2>О нас</h2>
      <p>
        рррррррррррррр ррррррррррр рррррррррррр рррррр рррррррр рррррр ррррррр
        ррррррррррррр рррррррррррррррррррррррррррррррррррррррр
        ррррррррррррррррррррр рррррррррррррррррррррррррррррр
        ррррррррррррррррррррррррррррррррррррррррррррррррр
        рррррррррррррррррррррррррррррррр
      </p>
      <ul className={about.container__soc}>
        <li>
          <a>
            <FacebookIcon
              name="facebook"
              type="logo"
              color="#ffffff"
            ></FacebookIcon>
          </a>
        </li>
        <li>
          <a>
            <InstagramIcon
              name="instagram"
              type="logo"
              color="#ffffff"
            ></InstagramIcon>
          </a>
        </li>
      </ul>
    </div>
  );
};
