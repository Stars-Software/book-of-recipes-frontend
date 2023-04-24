import { tokenService } from "../../token-service/access-token.service";

const headers = {
  Authorization: tokenService.getToken(),
  "Content-Type": "application/json",
};

export const getHeaders = (route: string = "") => {
  if (route.includes("upload")) {
    return { headers: { ...headers, "Content-Type": "multipart/form-data" } };
  }
  console.log({ ...headers, route });
  return { headers };
};
