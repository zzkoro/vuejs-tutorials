import axios, { AxiosPromise, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 3000,
});

export function fetchUser(id: string): AxiosPromise {
  const url = `user/${id}`;
  return axiosInstance.get(url);
}
