import { NavLink } from "react-router-dom";

export const WeekBtn = () => {
  const buttons = Array.from({ length: 11 }, (_, i) => i + 1);
  return (
    <div className="flex flex-col gap-2.25">
      {buttons.map((i) => (
        <NavLink
          key={i}
          end
          to={
            i == 1
              ? "/home/internet-software-architecture"
              : `/home/internet-software-architecture/week${i}`
          }
          className={({ isActive }) =>
            `px-2.75 py-2 w-42 rounded-sm flex justify-start font-semibold text-[16.5px]${
              isActive
                ? " border border-primary/60 text-primary bg-gray-100"
                : " text-black/60"
            } hover:bg-black/5`
          }
        >
          Week {i}
        </NavLink>
      ))}
    </div>
  );
};
