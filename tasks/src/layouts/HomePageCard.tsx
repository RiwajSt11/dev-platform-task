import htmlTag from "../assets/homePage/html-tag.png";
import { Link } from "react-router-dom";
import arrow from "../assets/homePage/Arrow.png";
import htmlTagEl from "../assets/homePage/html-tag-el.png";

interface LevelCard {
  faculty: string;
  title: string;
  description: string;
  module?: string;
  contributor?: string;
}

export const LevelCard = ({
  faculty,
  title,
  description,
  module,
}: LevelCard) => {
  const link = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
  return (
    <Link
      to={`${link}`}
      className="border border-gray-400 rounded-md w-107 px-8 py-7.25 bg-white flex flex-col justify-between h-80.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-300"
    >
      <div>
        <div className="flex justify-between items-center mb-5">
          <p className="text-black/70 text-sm">{faculty}</p>
          <button className=" bg-primary rounded-sm text-white text-sm px-3 py-1.25 cursor-pointer hover:brightness-95">
            Level 4
          </button>
        </div>
        <div className="flex items-start gap-6 h-16">
          <img src={htmlTag} alt="html-tag" className="h-11.5 w-11.75 mt-1" />
          <h1 className="text-[21.25px] font-medium tracking-wide">{title}</h1>
        </div>
        <div className="mt-5.5 text-black/70 ">
          <p className="leading-6.5">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6.75">
        <p className="text-black/70 text-md">{module}</p>
        <div>
          <button
            
            className="flex items-center justify-center text-primary gap-2 text-[13px] font-semibold tracking-wide cursor-pointer"
          >
            <span>Explore</span>
            <img src={arrow} alt="arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export const ExtraLearningsCard = ({
  faculty,
  title,
  description,
  contributor,
}: LevelCard) => {
  const link = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
  return (
    <Link
      to={`/${link}`}
      className="border border-gray-400 rounded-md w-107 px-8 py-7.25 bg-white flex flex-col justify-between h-80.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-5">
        <p className="text-black/70 text-[15px]">{faculty}</p>
        <button
          className={`rounded-sm text-[13px] px-2 py-0.75 cursor-pointer hover:brightness-95 bg-primary/10 ${contributor === "Student" ? "border border-primary text-primary" : "border border-[#4C6DFF] text-[#4C6DFF]"}`}
        >
          {contributor}
        </button>
      </div>
      <div className="flex items-start gap-6">
        <img
          src={contributor === "Student" ? htmlTagEl : htmlTag}
          alt="html-tag"
          className="h-11.5 w-11.75 mt-1"
        />
        <h1 className="text-[21.25px] font-semibold tracking-wide">{title}</h1>
      </div>
      <div className="mt-9 text-black/70 ">
        <p className="leading-6.5">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-6.75">
        <p className="text-black/70 text-sm">Computer Science</p>
        <div>
          <button
            className="flex items-center justify-center text-primary gap-2 text-[13px] font-semibold tracking-wide cursor-pointer"
          >
            <span>Explore</span>
            <img src={arrow} alt="arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
};
