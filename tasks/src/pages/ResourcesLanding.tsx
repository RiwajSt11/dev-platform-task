import { useEffect, useState } from "react";
import image1 from "../assets/Resources/Landing/image1.svg";
import image2 from "../assets/Resources/Landing/image2.svg";
import image3 from "../assets/Resources/Landing/image3.svg";
import image4 from "../assets/Resources/Landing/image4.svg";

function ResourcesLanding() {
  const images: string[] = [image1, image2, image3, image4];
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="slider w-full overflow-hidden border-2 border-black">
        <div
          className="sliderTrack h-screen w-screen flex transition-transform duration-700 ease-in-out scroll-smooth "
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {images.map((img: string, i: number) => (
            <img
              key={i}
              src={img}
              alt={`slide-${i}`}
              className="w-full  h-62.5  object-cover "
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ResourcesLanding;
