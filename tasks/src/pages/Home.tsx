import { Navbar } from "../layouts/Navbar";
import { LevelCardDisplay } from "../components/home/LevelCardDisplay";
import { LevelCardElDisplay } from "../components/home/LevelCardElDisplay";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 h-full px-24.25 pr-27 mb-12 pt-23">
        <div className="flex flex-col justify-center items-center pt-12.25 pl-1">
          <h1 className="text-[38.5px] tracking-wider font-extralight">
            Welcome to{" "}
            <span className="text-[42px] text-primary font-semibold">
              HCK Core
            </span>
          </h1>
          <p className="text-black/60 mt-7 font-medium text-[21.5px] tracking-wider">
            Explore academic resources organized by program, level, and week
          </p>
        </div>
        <div className="mt-14.5">
          <h2 className="text-primary font-medium text-[22.5px] tracking-wide mb-6.25 ml-1">
            Level 4
          </h2>
          <LevelCardDisplay />
        </div>
        <div className="mt-10">
          <h2 className="text-primary font-medium text-[23px] tracking-wide mb-3 ml-1">
            Extra Learnings
          </h2>
          <p className="flex justify-end text-[#1877F2]">See More</p>
          <LevelCardElDisplay />
        </div>
      </div>
    </>
  );
};
