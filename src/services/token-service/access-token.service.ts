class TokenService {
  private storage = localStorage;
  private fieldName = "accessToken";

  setToken(token: string) {
    this.storage.setItem(this.fieldName, token);
    return token;
  }

  getToken() {
    return this.storage.getItem(this.fieldName);
  }
}

export const tokenService = new TokenService();
