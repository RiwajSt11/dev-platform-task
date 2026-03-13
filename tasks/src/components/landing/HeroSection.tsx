import heroImg from "../../assets/landingPage/heroSection/heroImg.svg";
import handShake from "../../assets/landingPage/heroSection/handshake.svg";
import arrow from "../../assets/landingPage/heroSection/Arrow.svg";

function HeroSection() {
  return (
    <section className="pl-23.5 pr-19.5 hero flex flex-row justify-between  w-full h-full">
      <div className=" left  flex flex-col  w-[595px]  ">
        <div className="flex flex-col gap-7 pb-10  ">
          <div className="pl-1 tracking-wide topText flex flex-col item-center font-semibold text-primary text-[61px] leading-20  ">
            <p>Share Knowledge,</p>
            <p className=" text-[63px] font-bold text-black">Grow Together</p>
          </div>
          <div className=" pl-1 font-normal text-[##000000CC] text-[16.1px] leading-7">
            A collaborative platform for Herald College students and faculty
            <br />
            to share educational resources and build a comprehensive <br />
            knowledge base that enhances learning for everyone. <br />
          </div>
          <button className="mt-2.5 ml-[1.5px] pl-4.75 pr-6 py-2  text-white  text-[15px] font-medium bg-[#74BF44CC] hover:bg-[#A4C93A]  flex flex-row gap-2 w-fit rounded-[5.5px]">
            Get Started <img src={arrow} alt="arrow" width={"15px"} />
          </button>
        </div>
        <div className="pt-11  flex flex-row gap-26 w-full border-t pl-1 border-[rgba(151,149,149,0.3)]">
          <div className="Info text-primary font-bold text-[30px]">
            <p>2,100+</p>
            <p className="text-[#000000D9] text-[12px] font-extralight">
              Active Students
            </p>
          </div>
          <div className="Info text-[#FFC93F] font-bold text-[30px]">
            <p>100+</p>
            <p className="text-[#000000D9] text-[12px] font-light">
              Faculty Members
            </p>
          </div>
          <div className="Info text-primary ml-1 font-bold text-[30px] ">
            <p className="">5k+</p>
            <p className="text-[#000000D9] text-[12px] font-light">
              Resource Shared
            </p>
          </div>
        </div>
      </div>
      <div className="rightImg relative  w-fit  h-full  border-0">
        <img src={heroImg} alt="" className=" pt-10 pr-6 w-172.5 " />
        <img
          src={handShake}
          alt="handshake"
          className="absolute top-2 -right-2 w-25.25 h-20 transition-transform duration-300 hover:-translate-y-1.25"
        />
      </div>
    </section>
  );
}

export default HeroSection;
