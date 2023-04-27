import React, { useEffect } from "react";
import ProfilePage from "./components/profile-page";
import AuthRedirect from "../auth/auth.container";
import { bindActionCreators, compose } from "@reduxjs/toolkit";
import { fetchProfile } from "../../redux/thunks/profile.thunks";
import { ConnectedProps, connect, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { Typography } from "@mui/material";
import Preloader from "../common/components/preloader/preloader";

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ fetchProfile }, dispatch),
  };
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProfileContainer: React.FC<PropsFromRedux> = ({ fetchProfile }) => {
  useEffect(() => {
    fetchProfile();
  }, []);

  const { data, error, loading } = useSelector(
    (state: RootState) => state.profile
  );

  if (error) {
    return <Typography>{error.message}</Typography>;
  }

  if (loading) {
    return <Preloader />;
  }

  return <ProfilePage {...data!} />;
};

export default compose(connector, AuthRedirect)(ProfileContainer);
