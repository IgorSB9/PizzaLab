import React, { useState } from "react";
import "./App.css";
import { AddPizzaWindow } from "./components/addPizzaWindow/AddPizzaWindow";
import { Regisration } from "./components/authorization/registration/Registration";
import { SignIn } from "./components/authorization/signIn/SignIn";
import { Routes, Route } from "react-router";
import { Content } from "./components/content/Content.jsx";
import { Layout } from "./components/layout/Layout";
import { BasketPage } from "./components/basketPage/BasketPage";
import { OrderPage } from "./components/order/OrderPage";
import logo from "./img//menu/pizza-cart1.jpg";
import { ProfilePage } from "./components/profilePage/ProfilePage";

function App() {
  let [basket, setBasket] = useState([
    {
      id: 1,
      title: "Мексиканская",
      size: "30см",
      logo: logo,
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина,сочная курочка, свежий помидор",
      price: "500р",
    },
    {
      id: 2,
      title: "Мексиканская",
      size: "30см",
      logo: logo,
      description:
        "Пицца соус, сыр моцарелла, колбаски пепперони, бекон, свинина,сочная курочка, свежий помидор",
      price: "500р",
    },
  ]);

  const RemovePizzaFromBasket = (fId) => {
    basket = basket.filter((f) => f.id !== fId);
    setBasket(basket);
  };

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/signUp" element={<Regisration />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/basket" element={<BasketPage basket={basket} />} />
          <Route
            path="/order"
            element={
              <OrderPage
                basket={basket}
                RemovePizzaFromBasket={RemovePizzaFromBasket}
              />
            }
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/addPizza" element={<AddPizzaWindow />} />
          <Route path="/" element={<Content />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
