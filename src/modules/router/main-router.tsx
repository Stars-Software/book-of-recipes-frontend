import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../home/home";
import { ROUTER_KEYS } from "../common/consts/app-keys.const";
import { Register } from "../register/register";
import { Profile } from "../profile/profile";

export const MainRouter = () => (
  <Router>
    <Routes>
      <Route element={<Home />} path={ROUTER_KEYS.HOME} />
      <Route element={<Register />} path={ROUTER_KEYS.REGISTER} />
      <Route element={<Profile />} path={ROUTER_KEYS.PROFILE} />
    </Routes>
  </Router>
);
