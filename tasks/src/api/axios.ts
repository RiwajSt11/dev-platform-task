import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:9898/api/v1/auth/",
  withCredentials: true,
});
