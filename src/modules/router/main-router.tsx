import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../home/home";
import { ROUTER_KEYS } from "../common/consts/app-keys.const";
import ProfileContainer from "../profile/profile-container";
import ProductsContainer from "../products/products.container";
import RegisterContainer from "../register/register.container";
import SnackBar from "../snackbar/snackbar.component";
import CreateProductForm from "../products/components/forms/create.product.form";

export const MainRouter = () => (
  <Router>
    <Routes>
      <Route element={<Home />} path={ROUTER_KEYS.HOME} />
      <Route element={<RegisterContainer />} path={ROUTER_KEYS.REGISTER} />
      <Route element={<ProfileContainer />} path={ROUTER_KEYS.PROFILE} />
      <Route element={<ProductsContainer />} path={ROUTER_KEYS.PRODUCTS} />
      <Route
        element={<CreateProductForm />}
        path={ROUTER_KEYS.PRODUCTS + ROUTER_KEYS.NEW}
      />
    </Routes>
    <SnackBar />
  </Router>
);
