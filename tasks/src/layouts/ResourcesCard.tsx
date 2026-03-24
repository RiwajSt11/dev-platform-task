import clockImg from "../assets/Resources/Landing/clockImg.svg";
import circle from "../assets/Resources/Landing/circle.svg";

interface Props {
  title: string;
  module: string;
  level: number;
  description: string;
  image: string;
  time: string;
}

export const ResourcesCard = ({
  title,
  module,
  level,
  description,
  image,
  time,
}: Props) => {
  return (
    <div className="rounded-xl w-[95%] md:w-100 h-108.75 md:h-108.75 px-7.25 py-4.25 flex flex-col items-center shadow-[0px_0px_10px_rgba(0,0,0,0.28)] group cursor-pointer">
      <div className="relative h-42 md:h-52 w-full md:w-89 rounded-lg overflow-hidden">
        <img
          src={image}
          alt="image"
          className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-120"
        />
        <div
          className="absolute inset-0 flex flex-col items-center gap-18.5 
                  bg-black/30 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300"
        >
          <span className="text-white text-[11px] mt-23.5">
            Explore Content
          </span>
          <span className="text-white text-[11px]">Files Shared: 12</span>
        </div>
      </div>
      <div className="flex justify-between items-center w-full text-[12.5px] mt-[14.5px] text-black/65">
        <p>Computer Science</p>
        <p>Level {level}</p>
      </div>
      <div className="leading-6.25 w-full mt-0.75">
        <h2 className="text-[21.25px] font-semibold tracking-tighter truncate">
          {title}
        </h2>
        <p className="text-[12.5px] text-black/65">{module}</p>
      </div>
      <p className="w-full text-[14px] text-black/80 mt-1.75 leading-4.25">
        {description}
      </p>
      <div className="flex justify-between w-full mt-[25px] pl-0.25">
        <div className="flex gap-1 items-center mt-0.25">
          <img src={clockImg} alt="clock" className="w-4.5 h-4.5" />
          <p className="text-[11.75px] text-black/50 pb-0.5">{time}</p>
        </div>
        <div className="flex relative w-[50%] items-center">
          <img src={circle} className="w-6 h-6 absolute z-30 right-0" />
          <img
            src={circle}
            className="w-6 h-6 absolute z-20 right-4 transition-all ease-in-out duration-500 group-hover:right-6.5"
          />
          <img
            src={circle}
            className="w-6 h-6 absolute z-10 right-8 transition-all ease-in-out duration-500 group-hover:right-13"
          />
        </div>
      </div>
    </div>
  );
};
