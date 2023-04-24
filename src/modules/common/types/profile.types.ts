export type Geocode = {
  lat: number;
  lng: number;
};

export type ProfileAction = {
  type: string;
  payload: ProfileState;
};

export type ProfileState = {
  geocode: Geocode | null;
  name: string;
  email: string;
  avatar: string;
};
