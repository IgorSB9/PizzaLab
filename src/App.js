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
import { ProfilePage } from "./components/profilePage/ProfilePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/signUp" element={<Regisration />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/addPizza" element={<AddPizzaWindow />} />
        <Route path="/" element={<Content />} />
      </Routes>
    </Layout>
  );
}

export default App;
