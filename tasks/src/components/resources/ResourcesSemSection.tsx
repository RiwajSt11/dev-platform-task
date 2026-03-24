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
      <div className="flex justify-between items-center px-2.75">
        <h1 className="text-[54.75px] font-extrabold tracking-tight scale-y-77 origin-top text-primary leading-12 pl-0.25">
          Resources
        </h1>
        {searchDiv && (
          <div className="flex items-center gap-2.5 mt-0.5">
            <div
              className="flex items-center rounded-full w-95.5 border border-black/70 px-5.25 pl-4.5 py-[7.5px]"
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
      <p className="leading-0 text-[18px] text-black/40 ml-3.5 tracking-tight">
        Level {level}
      </p>
      <div>
        <h3 className="text-primary mt-10.5 text-[23px] tracking-tight scale-y-80 origin-top px-3">
          1st Semester
        </h3>
        <div className="mt-2.25 grid grid-cols-3 gap-4.5 px-1">
          <ResourcesSemLayout search={search} level={level} sem={1} />
        </div>
      </div>
      <div>
        <h3 className="text-primary mt-9 text-[23px] tracking-tight scale-y-80 origin-top px-3">
          2nd Semester
        </h3>
        <div className="mt-1.25 grid grid-cols-3 gap-4.5 px-1">
          <ResourcesSemLayout search={search} level={level} sem={2} />
        </div>
      </div>
    </div>
  );
};
