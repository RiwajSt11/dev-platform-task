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
  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-screen flex justify-between items-center bg-[#303030] h-[72px] px-[141.5px]">
        <img src={HCKlogo} alt="" className="w-[140px] h-[48px]" />
        <div className="flex flex-row gap-5 items-center mr-2.25">
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
        <button
          type="button"
          className="px-3.25 py-[9px] bg-primary text-white rounded-lg text-[13px] mr-2.5 cursor-pointer"
        >
          Request Resources
        </button>
      </nav>
      <ResourcesDropdown show={show} />
    </>
  );
};
