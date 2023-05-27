export type Geocode = {
  lat: number;
  lng: number;
};

export type AuthAction = {
  type: string;
  payload: boolean;
};

export type ProfileAction = {
  type: string;
  payload: ProfileState;
};

export type ProfileState = {
  name: string;
  email: string;
  avatar: {
    filename: string;
  };
};
