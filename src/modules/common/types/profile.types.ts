import { ILocation } from "./gecode.types";

export interface IProfileState {
  _id: string | null;
  name: string | null;
  avatar: IAvatar | null;
  location: ILocation | null;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp extends ISignIn {
  name: string;
  avatar: IAvatar;
}

export interface IAvatar {
  path: string;
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}
