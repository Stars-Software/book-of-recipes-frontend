import { tokenService } from "../../token-service/access-token.service";

export const getHeaders = (route: string = "") => {
  const headers = {
    Authorization: tokenService.getToken(),
    "Content-Type": "application/json",
  };

  if (route.includes("upload")) {
    return { headers: { ...headers, "Content-Type": "multipart/form-data" } };
  }

  console.log(headers);
  return { headers };
};
