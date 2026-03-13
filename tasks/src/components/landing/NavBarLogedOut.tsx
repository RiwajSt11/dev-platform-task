import hckCoreLogo from "../../assets/landingPage/hck_core_logo.svg";
function NavBarLogedOut() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#68686833] pl-23.5 pr-24 pt-5.5 pb-4.5 bg-white ">
      <nav className=" flex justify-between items-center ">
        <img src={hckCoreLogo} alt="HCK Core LOGO" width={"67px"} />
        <button
          type="button"
          className="bg-[#75BF43] hover:bg-[#A4C93A] text-[15px] font-bold rounded-[10px] px-[35.5px] py-[8.5PX]   text-white cursor-pointer "
        >
          Login
        </button>
      </nav>
    </header>
  );
}

export default NavBarLogedOut;
