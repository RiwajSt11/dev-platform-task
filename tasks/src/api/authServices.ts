import { api } from "./axios";

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}
export interface LoginData {
  email: string;
  password: string;
}

export const registerUser = async (userData: RegisterData) => {
  const response = await api.post("register", userData);
  return response;
};
export const loginUser = async (userData: LoginData) => {
  const response = await api.post("login", userData);
  return response;
};
