export type Geocode = {
  latitude: number;
  longitude: number;
};

export type AuthAction = {
  type: string;
  payload: boolean;
};

export type ProfileAction = {
  type: string;
  payload: ProfileState;
};

export type GeoCodeAction = {
  type: string;
  payload: Geocode | null;
};

export type ProfileState = {
  name: string;
  email: string;
  avatar: {
    filename: string;
  };
};
