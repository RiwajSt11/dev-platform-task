import { Link } from "react-router-dom";
import hck_logo from "../assets/landingPage/hck_core_logo.svg";

export const NavbarForLogin = () => {
  return (
    <>
      <div className="border-b-[0.7px] border-[#6868681d] flex items-center justify-between py-3.25 pl-23.5 pr-24">
        <div>
          <Link to="/">
            <img className="w-16.75 h-18" src={hck_logo} alt="hck_logo" />
          </Link>
        </div>
        <div>
          <Link
            to="/login"
            className="bg-primary w-28.25 h-10 rounded-lg flex justify-center items-center text-white text-[16px] cursor-pointer"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};
