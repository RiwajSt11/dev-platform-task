import image1 from "../../assets/Resources/Landing/image1.svg";
import image2 from "../../assets/Resources/Landing/image2.svg";
import image3 from "../../assets/Resources/Landing/image3.svg";
import image4 from "../../assets/Resources/Landing/image4.svg";

import { useEffect, useState } from "react";

export const ResourcesHero = () => {
  const images: string[] = [image1, image2, image3, image4];
  const [index, setIndex] = useState<number>(0);
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);
  const slidingWords = ["Resources.", "Materials.", "Guides.", "Reference."];

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % slidingWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const container = {
    height: "40px",
    overflow: "hidden",
  };

  const slider = {
    transition: "transform 0.5s ease",
  };

  const item = {
    height: "40px",
    display: "flex",
    alignItems: "center",
  };
  return (
    <div className="relative slider w-full overflow-hidden mt-18">
      <div
        className="sliderTrack h-[477.75px] w-screen flex transition-transform duration-700 ease-in-out scroll-smooth "
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img: string, i: number) => (
          <img
            key={i}
            src={img}
            alt={`slide-${i}`}
            className=" h-full object-cover "
          />
        ))}
      </div>
      <div className="absolute w-[600px] z-10 top-21.25 left-32.25 p-6 flex flex-col gap-4">
        <div className="text-white text-[43px] tracking-[-0.0085em] leading-12 font-[600]">
          <div className="flex gap-1.5">
            <span>Push</span>
            <span>Yourself</span>
            <span>With</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">Extra</span>
            <div style={container}>
              <div
                style={{
                  ...slider,
                  transform: `translateY(-${sliderIndex * 40}px)`,
                }}
              >
                {slidingWords.map((word, i) => (
                  <div key={i} style={item}>
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-white text-[17.25px] mt-2.75 leading-5.75">
          Why limit yourself with normal study materials when you can <br />
          push your limits with extra materials provided by your module <br />
          leader/ tutors themselves.
        </p>
        <button className="relative text-[12.5px] text-white mt-3.5 px-1 py-2.5 w-36 overflow-hidden rounded-full group cursor-pointer">
          <div className="absolute inset-0 border border-white rounded-full z-10 group-hover:border-primary transition-all duration-0 delay-100"></div>

          <span className="relative z-10">Find Your Resource</span>

          <span className="absolute left-0 top-0 h-full w-0 rounded-full bg-primary transition-all duration-400 ease-out group-hover:w-full"></span>
        </button>
      </div>
    </div>
  );
};
