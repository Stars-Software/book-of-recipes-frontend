import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { NavLink } from "react-router-dom";
import { ROUTER_KEYS } from "../common/consts/app-keys.const";

const AuthRedirect = (Component: React.FC) => {
  const RedirectComponent: React.FC<{}> = () => {
    const authed = useSelector((state: RootState) => state.auth.success);
    if (!authed) {
      return <NavLink to={ROUTER_KEYS.HOME} />;
    }
    return <Component />;
  };
  return RedirectComponent;
};

export default AuthRedirect;
