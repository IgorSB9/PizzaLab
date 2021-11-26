import React from "react";
import menu from "./Menu.module.css";
import { PizzaCard } from "./pizzaCard/PizzaCard";

export const Menu = () => {
  let pizza = [
    {
      id: 1,
      logo: "/img/menu/pizza-cart4.jpg",
      title: "Мясная",
      price30: "499",
      price35: "699",
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
    },

    {
      id: 2,
      logo: "/img/menu/pizza-cart1.jpg",
      title: "Пепперони",
      price30: "399",
      price35: "549",
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
    },

    {
      id: 3,
      logo: "/img/menu/pizza-cart2.jpg",
      title: "Итальянская",
      price30: "599",
      price35: "799",
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
    },

    {
      id: 4,
      logo: "/img/menu/pizza-cart3.jpg",
      title: "Чили",
      price30: "549",
      price35: "749",
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
    },
    {
      id: 5,
      logo: "/img/menu/pizza-cart3.jpg",
      title: "Чили",
      price30: "549",
      price35: "749",
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
    },
    {
      id: 6,
      logo: "/img/menu/pizza-cart3.jpg",
      title: "Чили",
      price30: "549",
      price35: "749",
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
    },
    {
      id: 7,
      logo: "/img/menu/pizza-cart3.jpg",
      title: "Чили",
      price30: "549",
      price35: "749",
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина, сочная курочка, свежий помидор",
    },
  ];

  return (
    <div className={menu.section__container}>
      <PizzaCard key={pizza.id} pizza={pizza} />
    </div>
  );
};
