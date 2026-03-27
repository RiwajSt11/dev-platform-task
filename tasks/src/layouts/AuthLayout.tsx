import { Outlet } from "react-router-dom";
import { AuthNavbar } from "../components/navbars/AuthNavbar";

export const AuthLayout = () => {
  return (
    <>
      <AuthNavbar />
      <Outlet />
    </>
  );
};
