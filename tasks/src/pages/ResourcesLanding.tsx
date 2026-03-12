import { useEffect, useState } from "react";
import image1 from "../assets/Resources/Landing/image1.svg";
import image2 from "../assets/Resources/Landing/image2.svg";
import image3 from "../assets/Resources/Landing/image3.svg";
import image4 from "../assets/Resources/Landing/image4.svg";
import HCKlogo from "../assets/landingPage/ContactUs/HearldCollegeLogo.svg";
function ResourcesLanding() {
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
    <>
      <header>
        <nav className="border-2 border-black">
          <img src={HCKlogo} alt="" />
          <div className="flex flex-row gap-5 items-center">
            <a href="">Home</a>
            <a href="">Resources</a>
            <a href="">Search</a>
          </div>
          <button type="button" className="">
            Request Resources
          </button>
        </nav>
      </header>
      <div className="relative slider w-full overflow-hidden border-2 border-black ">
        <div
          className="sliderTrack h-[550px] w-screen flex transition-transform duration-700 ease-in-out scroll-smooth "
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
        <div className="absolute w-[600px] z-10 top-10 left-10 bg-black/60 p-6 flex flex-col gap-5">
          <p className="text-white text-[50px] leading-14 font-bold">
            Push Yourselves With <br />{" "}
            <span className="text-primary">Extra</span>
            <div style={container}>
              <div
                style={{
                  ...slider,
                  transform: `translateY(-${index * 40}px)`,
                }}
              >
                {slidingWords.map((word, i) => (
                  <div key={i} style={item}>
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </p>
          <p className="text-white text-[12px] ">
            Why limit yourself with normal study materials when you can push{" "}
            <br />
            your limits with extra materials provided by your module leader/{" "}
            <br />
            tutors themselves.
          </p>
          <button
            type="button"
            className="text-sm text-white border border-white  "
          >
            Find Your Resources
          </button>
        </div>
      </div>
    </>
  );
}

export default ResourcesLanding;
