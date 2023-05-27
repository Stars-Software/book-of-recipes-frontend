import React, { useEffect } from "react";
import { ConnectedProps, connect, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { Navigate } from "react-router-dom";
import { ROUTER_KEYS } from "../common/consts/app-keys.const";
import Preloader from "../common/components/preloader/preloader";
import { refreshSession } from "../../redux/thunks/profile.thunks";
import { bindActionCreators } from "@reduxjs/toolkit";

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators({ refreshSession }, dispatch);
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const AuthRedirect = (Component: React.FC<any>) => {
  const RedirectComponent: React.FC<PropsFromRedux> = ({
    refreshSession,
    ...props
  }) => {
    const { loading, error } = useSelector((state: RootState) => state.app);
    const { authed } = useSelector((state: RootState) => state.profile);

    useEffect(() => {
      if (!authed && !loading && error!.code === 500) {
        refreshSession();
      }
    }, []);

    if (!authed && !loading) {
      return <Navigate to={ROUTER_KEYS.HOME} />;
    }

    if (loading) {
      return <Preloader />;
    }

    return <Component {...props} />;
  };
  return connector(RedirectComponent);
};

export default AuthRedirect;
