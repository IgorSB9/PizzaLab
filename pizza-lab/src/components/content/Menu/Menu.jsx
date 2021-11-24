import React, { useState } from "react";
import menu from "./Menu.module.css";
import { PizzaCard } from "./pizzaCard/PizzaCard";

export const Menu = () => {
  let [pizza, setPizza] = useState([
    {
      logo: "/img/menu/pizza-cart4.jpg",
      title: "Мясная",
      price30: "499",
      price35: "699",
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
    },

    {
      logo: "/img/menu/pizza-cart1.jpg",
      title: "Пепперони",
      price30: "399",
      price35: "549",
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
    },

    {
      logo: "/img/menu/pizza-cart2.jpg",
      title: "Итальянская",
      price30: "599",
      price35: "799",
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
    },

    {
      logo: "/img/menu/pizza-cart3.jpg",
      title: "Чили",
      price30: "549",
      price35: "749",
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
    },
    {
      logo: "/img/menu/pizza-cart3.jpg",
      title: "Чили",
      price30: "549",
      price35: "749",
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
    },
    {
      logo: "/img/menu/pizza-cart3.jpg",
      title: "Чили",
      price30: "549",
      price35: "749",
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
    },
    {
      logo: "/img/menu/pizza-cart3.jpg",
      title: "Чили",
      price30: "549",
      price35: "749",
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
    },
  ]);

  return (
    <div className={menu.section__container}>
      <PizzaCard pizza={pizza} />
    </div>
  );
  // logo={menu.logo}
  // title={menu.title}
  // price30={menu.price30}
  // price35={menu.price35}
  // description={menu.description}
};
