import axios, { AxiosRequestConfig } from "axios";
import { DataResponse } from "../types";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4fb450658b774f4ba68554a0cc4feef3",
  },
});

export default class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig = {}) => {
    return axiosInstance
      .get<DataResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (slug: string, config: AxiosRequestConfig = {}) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${slug}`, config)
      .then((res) => res.data);
  };

  getExtensive = (
    slug: string,
    extensivePath: string,
    config: AxiosRequestConfig = {}
  ) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${slug}/${extensivePath}`, config)
      .then((res) => res.data);
  };
}
