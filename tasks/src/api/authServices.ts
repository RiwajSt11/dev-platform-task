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
  const response = await api.post("auth/register", userData);
  return response;
};
export const loginUser = async (userData: LoginData) => {
  const response = await api.post("auth/login", userData);
  return response;
};

export const checkAuth = async()=>{
    try{
        const res=await api.get("user/profile")
        console.log("AUTH SUCCESS", res);
        return true;
    }catch(err){
      console.log("AUTH SUCCESS", err);
        return false
    }
}
