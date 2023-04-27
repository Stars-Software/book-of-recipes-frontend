import axios, { AxiosInstance, AxiosRequestConfig, AxiosStatic } from "axios";
import { getHeaders } from "./headers.service";

const API_URL = "http://localhost:4200/";

export class HttpService {
  public baseURL: string;

  public fetch: AxiosInstance;

  constructor(
    baseURL = API_URL,
    fetch = axios.create({ withCredentials: true, baseURL })
  ) {
    this.baseURL = baseURL!;
    this.fetch = fetch;
  }

  async get(route: string) {
    const headers = getHeaders();
    const response = await this.fetch.get(route, headers);
    return response.data;
  }

  async post<Type>(
    route: string,
    body: Type,
    params: AxiosRequestConfig | object = {}
  ) {
    const headers = getHeaders(route);
    console.log(headers)
    const response = await this.fetch.post(route, body, {
      ...headers,
      ...params,
    });
    return response.data;
  }

  async put<Type>(route: string, body: Type) {
    const headers = getHeaders(route);
    const response = await this.fetch.put(route, body, headers);
    return response.data;
  }

  async delete(route: string) {
    const headers = getHeaders();
    const response = await this.fetch.delete(route, headers);
    return response.data;
  }
}
