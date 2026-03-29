import axios from "axios";

export const api = axios.create({
  baseURL: "https://devplat.heraldcollege.edu.np/hck-core-api/api/v1/",
  withCredentials: true,
});
