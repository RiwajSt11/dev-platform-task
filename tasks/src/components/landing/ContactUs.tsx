import hckLog from "../../assets/landingPage/ContactUs/HearldCollegeLogo.svg";
import location from "../../assets/landingPage/ContactUs/Location.svg";
import phone from "../../assets/landingPage/ContactUs/Phone.svg";
import message from "../../assets/landingPage/ContactUs/Messsage.svg";

import fb from "../../assets/landingPage/ContactUs/fb.svg";
import insta from "../../assets/landingPage/ContactUs/insta.svg";
import Tiktok from "../../assets/landingPage/ContactUs/Tiktok.svg";
import utube from "../../assets/landingPage/ContactUs/utube.svg";

function ContactUs() {
  return (
    <div className="ml-28 mr-15.5 py-22.5 flex flex-col gap-13 h-screen border-b-2">
      <img src={hckLog} alt="" width={"210px"} />
      <div className="flex flex-row justify-between">
        <div className="firstCol flex flex-col gap-4">
          <div className="flex flex-row gap-3 items-center">
            <img src={location} alt="" />
            <p className="text-[17px] text-[#00000099]">
              Bhagawati Marga, Naxal
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <img src={phone} alt="" />
            <p className="text-[17px] text-[#00000099]">+977 9801022637</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <img src={message} alt="" />
            <p className="text-[17px] text-[#00000099]">
              info2heraldCollege.edu.np
            </p>
          </div>
        </div>
        <div className="secondCol flex flex-col gap-4">
          <p className="text-black font-bold">Programs</p>
          <p className="text-[#00000099]">Information Technology</p>
          <p className="text-[#00000099]">Cybersecurity</p>
          <p className="text-[#00000099]">International Business MAnagement</p>
          <p className="text-[#00000099]">Business Administration</p>
        </div>

        <div className="secondCol flex flex-col gap-4">
          <p className="text-black font-bold">Stay Updated</p>
          <p className="text-[#00000099]">
            Subscribe to get the latest updates about new resources & <br />
            platform features.
          </p>
          <form action="" method="post" className="flex flex-row gap-3 ">
            <input
              type="email"
              name="Emai"
              id="email"
              placeholder="Enter your Email"
              className="px-4 py-2 border-2 border-[#00000059] w-full rounded-[10px]"
            />
            <button
              type="submit"
              className="bg-primary cursor-pointer text-white text-[16px] rounded-[7px] px-6 py-2"
            >
              Subscribe
            </button>
          </form>
          <div className="flex flex-row gap-2">
            <img src={fb} alt="" width={"50px"} />{" "}
            <img src={insta} alt="" width={"50px"} />
            <img src={Tiktok} alt="" width={"50px"} />
            <img src={utube} alt="" width={"50px"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
