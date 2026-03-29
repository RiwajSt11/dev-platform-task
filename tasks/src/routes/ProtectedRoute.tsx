import { useEffect, useState } from "react";
import { checkAuth } from "../api/authServices";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  useEffect(() => {
    checkAuth().then(setIsAuth);
  }, []);
  if (isAuth === null) return <div className="text-center text-5xl">Loading...</div>;

  return isAuth ? <Outlet/> : <Navigate to="/login" />;
};
