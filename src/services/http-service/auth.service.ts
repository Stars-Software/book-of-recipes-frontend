import { SignIn, SignUp } from "../../modules/common/types/auth.types";
import { HttpService } from "./implementation/http.service";

export class AuthService extends HttpService {
  async signIn(options: SignIn) {
    return await this.post("user/login", options);
  }

  async signUp(options: SignUp) {
    return await this.post("user/register", options);
  }

  async refreshToken() {}
}

export const authService = new AuthService();
