import { Navbar } from "../../layouts/Navbar";

import { WeekBtn } from "../../components/isa/WeekBtn";
import { ISAWeek2Display } from "../../components/home/ISAWeek2Display";

export const ISAWeek2 = () => {
  return (
    <>
      <Navbar />
      <div className="pl-23 pr-24 flex w-screen pt-9 bg-gray-50 ">
        <div className="w-48.25 border-r border-black/20 fixed top-32.25">
          <h1 className="text-2xl font-medium mb-4.5 pl-0.75">All Weeks</h1>
          <WeekBtn />
        </div>
        <div className="w-6/7 pl-6 ml-48.5 pt-23">
          <ISAWeek2Display />
        </div>
      </div>
    </>
  );
};
