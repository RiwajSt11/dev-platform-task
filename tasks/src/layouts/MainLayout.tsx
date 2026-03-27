import { Outlet } from "react-router-dom";
import { MainNavbar } from "../components/navbars/MainNavbar";

export const MainLayout = () => {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
};
