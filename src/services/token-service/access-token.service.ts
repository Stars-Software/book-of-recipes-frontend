class TokenService {
  private fieldName = "accessToken";

  setToken(token: string) {
    console.log(token)
    localStorage.setItem(this.fieldName, token);
    return token;
  }

  getToken() {
    const token = localStorage.getItem(this.fieldName);
    return token;
  }

  clear() {
    localStorage.removeItem(this.fieldName);
  }
}

export const tokenService = new TokenService();
