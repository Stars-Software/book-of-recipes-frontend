import React, { useEffect } from "react";
import { AppDispatch, RootState } from "../../redux/store/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { ConnectedProps, connect, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { ROUTER_KEYS } from "../common/consts/app-keys.const";
import RegisterForm from "./components/register.form";
import { signUpProfile } from "../../redux/thunks/profile.thunks";

type PropsFromRedux = ConnectedProps<typeof connector>;

const RegisterContainer: React.FC<PropsFromRedux> = (props) => {
  const navigate = useNavigate();
  const { authed } = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    if (authed) {
      navigate(ROUTER_KEYS.PROFILE);
    }
  }, [authed]);


  return <RegisterForm {...props} />;
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators({ signUpProfile }, dispatch);
};

const connector = connect(null, mapDispatchToProps);

export default connector(RegisterContainer);
