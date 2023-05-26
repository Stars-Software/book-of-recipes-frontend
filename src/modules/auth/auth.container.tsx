import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { Navigate } from "react-router-dom";
import { ROUTER_KEYS } from "../common/consts/app-keys.const";

const AuthRedirect = (Component: React.FC<any>) => {
  const RedirectComponent: React.FC<any> = (props) => {
    const { authed, loading, error } = useSelector((state: RootState) => state.auth);
    if (!authed && !loading) {
      return <Navigate to={ROUTER_KEYS.HOME} />;
    }
    if (error) return <></>
    return <Component {...props} />;
  };
  return RedirectComponent;
};

export default AuthRedirect;
