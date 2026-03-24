import { ResourcesSemLayout } from "../../layouts/ResourcesSemLayout";
import searchImg from "../../assets/Resources/Landing/search.svg";

interface Props {
  searchRef?: React.RefObject<HTMLDivElement | null>;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  level: number;
  search: string;
  setSearch: (value: string) => void;
  searchDiv: boolean;
}

export const ResourcesSemSection = ({
  searchRef,
  inputRef,
  level,
  search,
  setSearch,
  searchDiv,
}: Props) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center px-2.75">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h1 className="text-[30px] md:text-[54.75px] font-extrabold tracking-tight scale-y-77 origin-top text-primary leading-12 pl-0.25">
            Resources
          </h1>
          <p className="leading-0 text-[18px] text-black/40 pl-1 tracking-tight">
            Level {level}
          </p>
        </div>
        {searchDiv && (
          <div className="flex flex-col md:flex-row items-center gap-2.5 mt-0.5">
            <div
              className="flex items-center rounded-full w-75 md:w-95.5 border border-black/70 px-5.25 pl-4.5 py-[7.5px]"
              ref={searchRef}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Search"
                className="w-full outline-none text-[13px]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <img
                src={searchImg}
                alt="search-img"
                className="w-3 h-3 cursor-pointer"
              />
            </div>
            <button className="px-3.5 py-[7.5px] text-primary border border-primary rounded-3xl text-[13px] mr-1.5 cursor-pointer transition-colors duration-400 ease-in-out hover:bg-primary hover:text-white">
              Sort by Level
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-primary mt-10.5 text-[23px] tracking-tight scale-y-80 origin-top px-3">
          1st Semester
        </h3>
        <div className="mt-2.25 grid grid-cols-1 md:grid-cols-3 gap-4.5 px-1">
          <ResourcesSemLayout search={search} level={level} sem={1} />
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-primary mt-9 text-[23px] tracking-tight scale-y-80 origin-top px-3">
          2nd Semester
        </h3>
        <div className="mt-1.25 grid grid-cols-1 md:grid-cols-3 gap-4.5 px-1">
          <ResourcesSemLayout search={search} level={level} sem={2} />
        </div>
      </div>
    </div>
  );
};
