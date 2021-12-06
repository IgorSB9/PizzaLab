import React, { useState } from "react";
import "./App.css";
import { AddPizzaWindow } from "./components/content/addPizzaWindow/AddPizzaWindow";
import { Regisration } from "./components/authorization/registration/Registration";
import { SignIn } from "./components/authorization/signIn/SignIn";
import { Routes, Route } from "react-router";
import { Content } from "./components/content/Content.jsx";
import { Layout } from "./components/layout/Layout";
import pizzaList from "./components/pizza-list";
import { BasketPage } from "./components/header/navigation/basket/basketPage/BasketPage";

function App() {
  let [pizza, setPizza] = useState(pizzaList);

  const RemovePizza = (fId) => {
    pizza = pizza.filter((f) => f.id !== fId);
    setPizza(pizza);
  };

  return (
    <div className="App">
      <Layout pizza={pizza}>
        <Routes>
          <Route path="/signUp" element={<Regisration />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/basket" element={<BasketPage pizza={pizza} />} />
          <Route path="/addPizza" element={<AddPizzaWindow pizza={pizza} />} />
          <Route
            path="/"
            element={<Content pizza={pizza} RemovePizza={RemovePizza} />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
