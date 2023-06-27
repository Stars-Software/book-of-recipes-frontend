import React, { Suspense, useCallback, useEffect } from "react";
import { connect, ConnectedProps, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store/store";
import {
  getGeoCode,
  logOutProfile,
  refreshSession,
} from "../../redux/thunks/profile.thunks";
import { ROUTER_KEYS } from "../common/consts/app-keys.const";
import Preloader from "../common/components/preloader/preloader";

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators(
    { refreshSession, logOutProfile, getGeoCode },
    dispatch
  );
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const AuthRedirect = (Component: React.FC<any>) => {
  const RedirectComponent: React.FC<PropsFromRedux> = (props) => {
    const { refreshSession, logOutProfile, getGeoCode } = props;
    const { error, loading } = useSelector((state: RootState) => state.app);
    const navigate = useNavigate();

    const memoizedRefreshSession = useCallback(() => {
      refreshSession();
    }, [refreshSession]);

    const memoizedLogOut = useCallback(() => {
      logOutProfile();
    }, [logOutProfile]);

    // const memoizedGetGeoCode = useCallback(() => {
    //   getGeoCode();
    // }, []);

    useEffect(() => {
      const handleBeforeUnload = () => {
        memoizedRefreshSession();
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }, [memoizedRefreshSession]);

    useEffect(() => {
      if (error && error.code === 401) {
        memoizedRefreshSession();
      }
      if (error && !loading && error.code === 403) {
        memoizedLogOut();
        navigate(ROUTER_KEYS.HOME);
      }
    }, [error, loading, memoizedRefreshSession, memoizedLogOut, navigate]);

    // useEffect(() => {
    //   if (authed) {
    //     memoizedGetGeoCode();
    //   }
    // }, [authed, memoizedGetGeoCode]);

    return <Component {...props} />;
  };

  return connector(RedirectComponent);
};

export default AuthRedirect;
