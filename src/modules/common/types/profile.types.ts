import { ILocation } from "./gecode.types";

export interface IProfileState {
  _id: string | null;
  name: string | null;
  avatar: string | null;
  location: ILocation | null;
}
