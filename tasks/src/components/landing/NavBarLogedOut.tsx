import { Link } from "react-router-dom";
import hckCoreLogo from "../../assets/landingPage/hck_core_logo.svg";
function NavBarLogedOut() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#68686833] pl-23.5 pr-24 pt-5.5 pb-4.5 bg-white ">
      <nav className=" flex justify-between items-center ">
        <img src={hckCoreLogo} alt="HCK Core LOGO" width={"67px"} />
        <Link
          to="/login"
          type="button"
          className="bg-primary w-28.25 h-10 rounded-lg flex justify-center items-center text-white text-[16px] cursor-pointer "
        >
          Login
        </Link>
      </nav>
    </header>
  );
}

export default NavBarLogedOut;
