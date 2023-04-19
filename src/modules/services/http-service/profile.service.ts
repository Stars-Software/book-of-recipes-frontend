import { ISignIn, ISignUp } from "../../common/types/profile.types";
import { HttpService } from "./implementation/http.service";

export class ProfileService extends HttpService {
  signIn(options: ISignIn) {
    return this.post("user/signIn", options);
  }
  getProfile() {
    return this.get(`user/profile/`);
  }
  signUp(options: ISignUp) {
    return this.post("user/signUp", options);
  }
  //   updateAvatar(user: IUpdateUserAvatar) {
  //     return this.put("user/profile/avatar", user);
  //   }
  //   updatePassword(data: IUpdateUserPassword) {
  //     return this.put("user/profile/password", data);
  //   }
}

export const profileService = new ProfileService();
