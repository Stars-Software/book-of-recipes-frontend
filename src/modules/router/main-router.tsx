import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../home/home";
import { ROUTER_KEYS } from "../common/consts/app-keys.const";
import ProfileContainer from "../profile/profile-container";
import ProductsContainer from "../products/products.container";
import RegisterContainer from "../register/register.container";

export const MainRouter = () => (
  <Router>
    <Routes>
      <Route element={<Home />} path={ROUTER_KEYS.HOME} />
      <Route element={<RegisterContainer />} path={ROUTER_KEYS.REGISTER} />
      <Route element={<ProfileContainer />} path={ROUTER_KEYS.PROFILE} />
      <Route element={<ProductsContainer />} path={ROUTER_KEYS.PRODUCTS} />
    </Routes>
  </Router>
);
