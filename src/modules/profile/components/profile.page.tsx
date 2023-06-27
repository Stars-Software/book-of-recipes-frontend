import React from "react";
import Preloader from "../../common/components/preloader/preloader";
import MenuAppBar from "../../common/components/menu-app-bar/menu-app-bar";
import ProfileCard from "./card/profile.card";

type Props = {
  data: any;
  loading: number;
};

const ProfilePage: React.FC<Props> = ({ data, loading }) => {

  if (!data || loading) {
    return <Preloader />;
  }
  
  return (
    <>
      <MenuAppBar />
      <ProfileCard {...data} />
    </>
  );
};

export default ProfilePage;
