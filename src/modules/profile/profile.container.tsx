import React, { useEffect } from "react";
import { AppDispatch, RootState } from "../../redux/store/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { fetchProfile } from "../../redux/thunks/profile.thunks";
import { ConnectedProps, connect, useSelector } from "react-redux";
import AuthRedirect from "../auth/auth.container";
import ProfilePage from "./components/profile.page";

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators({ fetchProfile }, dispatch);
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProfileContainer: React.FC<PropsFromRedux> = ({ fetchProfile }) => {
  const { loading } = useSelector((state: RootState) => state.app);
  const { data } = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    fetchProfile();
  }, []);

  return <ProfilePage {...{ loading, data }} />;
};

export default connector(AuthRedirect(ProfileContainer));
