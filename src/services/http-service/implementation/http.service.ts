import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getHeaders } from "./headers.service";

const API_URL = "http://localhost:4200/";

export class HttpService {
  public baseURL: string;
  public fetch: AxiosInstance;

  constructor(
    baseURL = API_URL,
    fetch = axios.create({ withCredentials: true, baseURL })
  ) {
    this.baseURL = baseURL;
    this.fetch = fetch;
    this.fetch.interceptors.response.use(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  }

  async get(route: string) {
    const headers = getHeaders();
    return await this.fetch.get(route, headers);
  }

  async post<Type>(
    route: string,
    body: Type,
    params: AxiosRequestConfig | object = {}
  ) {
    const headers = getHeaders(route);
    return await this.fetch.post(route, body, {
      ...headers,
      ...params,
    });
  }

  async put<Type>(route: string, body: Type) {
    const headers = getHeaders(route);
    return await this.fetch.put(route, body, headers);
  }

  async delete(route: string) {
    const headers = getHeaders();
    return await this.fetch.delete(route, headers);
  }
}
