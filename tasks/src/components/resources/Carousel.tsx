import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const Carousel = ({ children }: Props) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scrollAmount = 320;

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // 🔥 Auto slide (mobile only — lg grid doesn't scroll)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const el = scrollRef.current;

      // Only auto-slide when in scroll mode (not grid)
      if (el.scrollWidth <= el.clientWidth) return;

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="relative overflow-hidden w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Button — mobile only */}
      <button
        onClick={scrollLeft}
        className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur p-2 rounded-full shadow-md text-sm"
      >
        ◀
      </button>

      {/* Right Button — mobile only */}
      <button
        onClick={scrollRight}
        className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur p-2 rounded-full shadow-md text-sm"
      >
        ▶
      </button>

      {/* Scroll container on mobile / grid on desktop */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-10 mt-2.25 md:mt-0 px-2 py-3 md:py-2.25 ml-0.25
                   md:grid md:grid-cols-3 md:overflow-visible md:gap-4.75 lg:px-1"
        style={{ scrollbarWidth: "none" }}
      >
        {children}
      </div>
    </div>
  );
};
