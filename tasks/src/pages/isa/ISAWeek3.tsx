

import { WeekBtn } from "../../components/isa/WeekBtn";

export const ISAWeek3 = () => {
  return (
    <>

      <div className="pl-23 pr-24 flex w-screen pt-9 bg-gray-50 ">
        <div className="w-48.25 border-r border-black/20 fixed top-32.25">
          <h1 className="text-2xl font-medium mb-4.5 pl-0.75">All Weeks</h1>
          <WeekBtn />
        </div>
        <div className="w-6/7 ml-46 pt-23">
          <h2 className="text-center mt-16 text-[21px] text-black/60 tracking-wide">
            Content for Week 3 coming soon...
          </h2>
        </div>
      </div>
    </>
  );
};
