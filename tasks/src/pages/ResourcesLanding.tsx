import { useState } from "react";

import searchImg from "../assets/Resources/Landing/search.svg";

import { useRef } from "react";

import { RecentlyAddedLayout } from "../components/resources/RecentlyAddedLayout";
import { OngoingModulesLayout } from "../components/resources/OngoingModulesLayout";
import { PreviousModulesLayout } from "../components/resources/PreviousModulesLayout";

import { NavbarResources } from "../layouts/NavbarResources";
import { ResourcesFooter } from "../layouts/ResourcesFooter";
import { ResourcesHero } from "../components/resources/ResourcesHero";

function ResourcesLanding() {
  const [search, setSearch] = useState<string>("");

  const searchRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleScrollToSearch = () => {
    const yOffset = -120;
    const element = searchRef.current;

    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setTimeout(() => {
      inputRef.current?.focus();
    }, 500);
  };
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header>
          <NavbarResources handleScrollToSearch={handleScrollToSearch} />
        </header>

        <div className="flex-1">
          <ResourcesHero />
          <div className="px-38 mt-15.75">
            <h1 className="text-[32.25px] text-black/90 font-semibold tracking-tight flex gap-1.5 ml-0.5">
              <span>Recently</span>
              <span>Added</span>
              <span>Materials</span>
            </h1>
            <div className="mt-7.75 grid grid-cols-3 gap-4">
              <RecentlyAddedLayout />
            </div>
          </div>
          <div className="px-38 mt-24">
            <h1 className="text-[32.25px] text-black/90 font-semibold tracking-tight flex gap-1.5 ml-0.5">
              <span>Ongoing</span>
              <span>Modules</span>
            </h1>
            <div className="mt-7.75 grid grid-cols-3 gap-4">
              <OngoingModulesLayout />
            </div>
          </div>
          <div
            className="px-37.5 mt-[93.5px] mb-10 scroll-mt-35"
            ref={searchRef}
          >
            <div className="flex justify-between items-center">
              <h1 className="text-[32.25px] text-black/90 font-semibold tracking-tight flex gap-1.5 ml-0.5">
                <span>Previous</span>
                <span>Modules</span>
              </h1>
              <div className="flex items-center gap-2.5">
                <div className="flex items-center rounded-full w-96 border border-black/50 px-5 py-[7.25px] ">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search"
                    className="w-full outline-none text-[13.25px]"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <img
                    src={searchImg}
                    alt="search-img"
                    className="w-3 h-3 cursor-pointer"
                  />
                </div>
                <button className="px-3.25 py-2 text-primary border border-primary rounded-3xl text-[13px] mr-1.5 cursor-pointer transition-colors duration-400 ease-in-out hover:bg-primary hover:text-white">
                  Sort by Level
                </button>
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-primary text-[18px] font-medium tracking-widest mt-9.75 ml-4.5">
                  Level - 4
                </h2>
                <div className="mt-5.5 grid grid-cols-3 gap-x-4 gap-y-13 mx-0.75">
                  <PreviousModulesLayout level={4} search={search} />
                </div>
              </div>
              <div className="mt-23.75">
                <h2 className="text-primary text-[18px] font-medium tracking-widest ml-4.5">
                  Level - 5
                </h2>
                <div className="mt-5.5 grid grid-cols-3 gap-x-4 gap-y-13 mx-0.75">
                  <PreviousModulesLayout level={5} search={search} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-42">
          <ResourcesFooter />
        </footer>
      </div>
    </>
  );
}

export default ResourcesLanding;
