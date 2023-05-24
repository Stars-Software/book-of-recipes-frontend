import React, { useEffect } from "react";
import { ConnectedProps, connect, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { useNavigate } from "react-router-dom";
import { ROUTER_KEYS } from "../common/consts/app-keys.const";
import { bindActionCreators } from "@reduxjs/toolkit";
import { signInProfile } from "../../redux/thunks/auth.thunks";
import LoginForm from "./components/login.form";

type PropsFromRedux = ConnectedProps<typeof connector>;

const LoginContainer: React.FC<PropsFromRedux> = (props) => {
  const { authed, error } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (authed) {
      navigate(ROUTER_KEYS.PROFILE);
    }
  }, [authed]);

  if (error) return <p>{error}</p>; //write an Error Component

  return <LoginForm {...props} />;
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators({ signInProfile }, dispatch);
};

const connector = connect(null, mapDispatchToProps);

export default connector(LoginContainer);
