import React, { useCallback, useEffect } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { fetchProfile } from "../../redux/thunks/profile.thunks";
import { connect, ConnectedProps, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import AuthRedirect from "../auth/auth.container";
import ProfilePage from "./components/profile-page";
import Preloader from "../common/components/preloader/preloader";
2
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators({ fetchProfile }, dispatch);
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProfileContainer: React.FC<PropsFromRedux> = ({ fetchProfile }) => {
  const { data } = useSelector((state: RootState) => state.profile);

  const memoizedFetchProfile = useCallback(() => {
    fetchProfile();
  }, [fetchProfile]);

  useEffect(() => {
    memoizedFetchProfile();
  }, []);

  return <>{data ? <ProfilePage {...data} /> : <Preloader />}</>;
};

export default connector(AuthRedirect(ProfileContainer));
