import { NavLink } from "react-router-dom";
import hck_logo from "../assets/landingPage/hck_core_logo.svg";

interface NavLinkProps {
  isActive: boolean;
}

export const Navbar = () => {
  const navbarActive = ({ isActive }: NavLinkProps) => {
    return `text-[19px] font-medium cursor-pointer ${isActive ? "text-primary" : "text-black"}`;
  };
  return (
    <>
      <div className="flex items-center justify-between h-23 px-23.75 pr-24 fixed top-0 left-0 w-full bg-white z-50">
        <div>
          <NavLink to="/">
            <img
              className="w-16.75 h-18 pt-1.25"
              src={hck_logo}
              alt="hck_logo"
            />
          </NavLink>
        </div>
        <div className="flex gap-12.75 justify-center items-center">
          <NavLink to="/home" className={navbarActive}>
            Home
          </NavLink>

          <NavLink to="/extra-learning" className={navbarActive}>
            Extra Learning
          </NavLink>

          <NavLink to="/submit-resource" className={navbarActive}>
            Submit Resource
          </NavLink>

          <NavLink to="/profile" className={navbarActive}>
            Profile
          </NavLink>
        </div>
      </div>
    </>
  );
};
