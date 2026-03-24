import HCKlogo from "../assets/Resources/Landing/HCKLogo.svg";
import arrow from "../assets/Resources/Landing/arrow.svg";
import { Link } from "react-router-dom";
import { ResourcesDropdown } from "../components/resources/ResourcesDropdown";
import { useState } from "react";

interface Props {
  handleScrollToSearch?: () => void;
}

export const NavbarResources = ({ handleScrollToSearch }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full flex justify-between items-center bg-[#303030] h-[72px] px-[35px] md:px-[141.5px]">
        <img
          src={HCKlogo}
          alt=""
          className="w-[120px] md:w-[140px] h-[35px] md:h-[48px]"
        />
        <div className="hidden md:flex flex-row gap-5 items-center mr-2.25">
          <Link
            to="/resources"
            className="text-white text-sm mr-2.25 font-normal transition-colors duration-300 hover:text-primary"
          >
            Home
          </Link>
          <Link
            to=""
            className="text-white text-sm flex gap-2.75 items-center justify-center transition-colors duration-300 hover:text-primary"
            onClick={() => setShow(!show)}
          >
            <span>Resources</span>
            <img
              src={arrow}
              alt="arrow"
              className={`h-2 w-1.75 transition-transform duration-300 ${show ? "rotate-90" : "rotate-0"}`}
            />
          </Link>
          <Link
            to=""
            onClick={handleScrollToSearch}
            className="text-white text-sm transition-colors duration-300 hover:text-primary"
          >
            Search
          </Link>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="px-3.25 py-2.25 bg-primary text-white rounded-lg text-[10px] md:text-[13px] mr-2.5 cursor-pointer"
          >
            Request Resources
          </button>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      </nav>
      <div
        className={`fixed top-[72px] left-0 w-full bg-[#303030] text-white flex flex-col items-center gap-6 py-6 z-70 md:hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <Link to="/resources" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <button
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          Resources
        </button>

        <button
          onClick={() => {
            setMenuOpen(false);
            handleScrollToSearch?.();
          }}
        >
          Search
        </button>

        <button className="px-4 py-2 bg-primary rounded-lg">
          Request Resources
        </button>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 z-60"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      <ResourcesDropdown show={show} setShow={setShow} />
    </>
  );
};
