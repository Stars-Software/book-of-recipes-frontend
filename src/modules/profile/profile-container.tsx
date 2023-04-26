import React, { useEffect } from "react";
import ProfilePage from "./components/profile-page";
import AuthRedirect from "../auth/auth.container";
import { compose } from "@reduxjs/toolkit";
import { fetchProfile } from "../../redux/thunks/profile.thunks";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

const ProfileContainer = () => {
  useEffect(() => {
    fetchProfile();
  }, []);

  const profile = useSelector((state: RootState) => state.profile);

  return <ProfilePage {...profile} />;
};

export default compose(AuthRedirect)(ProfileContainer);
