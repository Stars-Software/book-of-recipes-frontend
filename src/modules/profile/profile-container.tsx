import React, { useEffect } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { fetchProfile } from "../../redux/thunks/profile.thunks";
import { connect, ConnectedProps, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { Typography } from "@mui/material";
import Preloader from "../common/components/preloader/preloader";
import AuthRedirect from "../auth/auth.container";
import ProfilePage from "./components/profile-page";

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators({ fetchProfile }, dispatch);
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProfileContainer: React.FC<PropsFromRedux> = ({ fetchProfile }) => {
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const { data, error, loading } = useSelector(
    (state: RootState) => state.profile
  );

  if (error) {
    return <Typography>{error.message}</Typography>;
  }

  if (loading || !data) {
    return <Preloader />;
  }

  return <ProfilePage {...data} />;
};

export default connector(AuthRedirect(ProfileContainer));
