import React, { useEffect } from "react";
import { ConnectedProps, connect, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { useNavigate } from "react-router-dom";
import { ROUTER_KEYS } from "../common/consts/app-keys.const";
import { bindActionCreators } from "@reduxjs/toolkit";

import LoginForm from "./components/login.form";
import { signInProfile } from "../../redux/thunks/profile.thunks";

type PropsFromRedux = ConnectedProps<typeof connector>;

const LoginContainer: React.FC<PropsFromRedux> = (props) => {
  const { authed } = useSelector((state: RootState) => state.profile);
  const navigate = useNavigate();

  useEffect(() => {
    if (authed) {
      navigate(ROUTER_KEYS.PROFILE);
    }
  }, [authed]);

  return <LoginForm {...props} />;
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators({ signInProfile }, dispatch);
};

const connector = connect(null, mapDispatchToProps);

export default connector(LoginContainer);
