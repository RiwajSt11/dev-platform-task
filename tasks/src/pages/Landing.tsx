// images
import arrow from "../assets/landingPage/heroSection/Arrow.svg";
import heroImg from "../assets/landingPage/heroSection/heroImg.svg";
import handShake from "../assets/landingPage/heroSection/handshake.svg";
import card1img from "../assets/landingPage/About1/card1Img.svg";
import card2img from "../assets/landingPage/About1/card2Img.svg";
import card3img from "../assets/landingPage/About1/card3Img.svg";
import VideoContent from "../assets/landingPage/About2/VideoContent.svg";
import codeRepo from "../assets/landingPage/About2/CodeRepo.svg";
import doc from "../assets/landingPage/About2/Docs.svg";
import Download from "../assets/landingPage/About2/Download.svg";
import share from "../assets/landingPage/About2/Share.svg";
import join from "../assets/landingPage/About2/Join.svg";
import PeerLearning from "../assets/landingPage/About3/PeerLearning.svg";
import InstantAccess from "../assets/landingPage/About3/InstantAccess.svg";
import CommunitySupport from "../assets/landingPage/About3/CoomunitySupport.svg";
import hckLog from "../assets/landingPage/ContactUs/HearldCollegeLogo.svg";
import location from "../assets/landingPage/ContactUs/Location.svg";
import phone from "../assets/landingPage/ContactUs/Phone.svg";
import message from "../assets/landingPage/ContactUs/Messsage.svg";
import fb from "../assets/landingPage/ContactUs/fb.svg";
import insta from "../assets/landingPage/ContactUs/insta.svg";
import Tiktok from "../assets/landingPage/ContactUs/Tiktok.svg";
import utube from "../assets/landingPage/ContactUs/utube.svg";

// functions
import { NavbarForLogin } from "./NavbarForLogin";
function Landing() {
  return (
    <>
      <div className="w-screen h-screen">
        <NavbarForLogin />
        <div className="  py-20  h-full">
          {/* hereo */}
          <section className="pl-23.5 pr-15.5 hero flex flex-row  justify-between  w-full h-full">
            <div className=" left  flex flex-col  ">
              <div className="flex flex-col gap-8 pb-10  ">
                <div className="pl-1 topText flex flex-col item-center font-semibold text-primary text-[63px] leading-19  ">
                  <p>Share Knowledge,</p>
                  <p className=" text-[63px] font-bold text-black">
                    Grow Together
                  </p>
                </div>
                <div className=" pl-1 font-normal text-[##000000CC] text-[16px] leading-7">
                  A collaborative platform for Herald College students and
                  faculty
                  <br />
                  to share educational resources and build a comprehensive{" "}
                  <br />
                  knowledge base that enhances learning for everyone. <br />
                </div>
                <button className="px-6 py-2 text-white  text-[14px] font-medium mt-1 bg-[#74BF44CC] hover:bg-[#A4C93A]  flex flex-row gap-2 w-fit rounded-[5.5px]">
                  Get Started <img src={arrow} alt="arrow" width={"15px"} />
                </button>
              </div>
              <div className="pt-10  flex flex-row gap-26 border-t pl-1 border-[rgba(151,149,149,0.3)]">
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
            <div className="rightImg relative  w-fit  h-full">
              <img src={heroImg} alt="" className=" pt-9 pr-5 w-173.5" />
              <img
                src={handShake}
                alt="handshake"
                className="absolute top-2 -right-2 w-25.25 h-21.25 transition-transform duration-300 hover:-translate-y-1.25"
              />
            </div>
          </section>

          {/* about 1 */}
          <section className="pl-23.5 pr-15.5 flex flex-col justify-between  h-250 py-45 ">
            {/* top */}
            <div className="texts flex flex-col gap-5 justify-center items-center ">
              <p className="font-bold text-[41.5px] text-center text-[#000000BF] leading-13 ">
                Designed for smarter{" "}
                <span className="text-primary">collaboration</span> <br />{" "}
                between students & educators <br /> at Herald College
              </p>
              <p className="leading-8 text-sm text-center text-[#000000CC] text-[17px] font-light">
                Our platform combines the best of educational technology with
                intuitive design to <br /> create an environment where knowledge
                flows freely and learning thrives.
              </p>
            </div>

            {/* bottom cards */}
            <div className=" h-92.5 flex flex-row justify-between items-center">
              <div className="border-t-[0.1px] border-l-[0.1px] shadow-[#0000001A] shadow-md transition-transform duration-300 hover:-translate-y-1.25  border-[rgba(151,149,149,0.3)] flex flex-col justify-around p-6 w-110 h-70 rounded-[19px] ">
                <img src={card1img} alt="" width={"50px"} />
                <p className="title text-[30px] font-bold">
                  Teacher Moderation
                </p>
                <p className="para text-[16px] text-[#000000B2] font-light">
                  Curated content with quality assurance from <br /> our
                  experienced faculty members to maintain <br />
                  educational standards.
                </p>
              </div>
              <div className="border-t-[0.1px] border-l-[0.1px] shadow-[#0000001A] shadow-md transition-transform duration-300 hover:-translate-y-1.25  border-[rgba(151,149,149,0.3)] flex flex-col justify-around p-6 w-110 h-70 rounded-[19px] ">
                <img src={card2img} alt="" width={"50px"} />
                <p className="title text-[30px] font-bold">
                  Student Contributions
                </p>
                <p className="para text-[16px] text-[#000000B2] font-light">
                  Empower students to share knowledge, collaborate <br /> on
                  projects, and learn from peer experiences.
                </p>
              </div>
              <div className="border-t-[0.1px] border-l-[0.1px] shadow-[#0000001A] shadow-md transition-transform duration-300 hover:-translate-y-1.25  border-[rgba(151,149,149,0.3)] flex flex-col justify-around p-6 w-110 h-70 rounded-[19px] ">
                <img src={card3img} alt="" width={"50px"} />
                <p className="title text-[30px] font-bold">
                  Tag-Based Discovery
                </p>
                <p className="para text-[16px] text-[#000000B2] font-light">
                  Smart categorization and tagging system makes <br />
                  finding relevant resources quick and intuitive.
                </p>
              </div>
            </div>
          </section>

          {/* about 2 */}
          <section className="pl-23.5 pr-15.5 flex flex-col justify-between  h-275  ">
            {/* top */}
            <div className="  flex flex-col gap-7  justify-center items-center ">
              <p className="font-bold text-[41.5px] text-center ">
                Share Various Types of{" "}
                <span className="text-primary">Content</span>
              </p>
              <p className="leading-8 text-sm text-center text-[#000000CC] text-[17px] font-light">
                From video tutorials to research papers, discover educational
                content that helps the <br /> community thrive and grow
                together.
              </p>
            </div>

            {/* bottom cards */}
            <div className="  grid grid-cols-3 grid-rows-2 gap-x-12 items-center ">
              <div className="border-t-[0.1px] border-l-[0.1px] shadow-[#0000001A] shadow-md transition-transform duration-300 hover:-translate-y-2  border-[rgba(151,149,149,0.3)] flex flex-col justify-between items-center px-6 py-8 w-100 h-105 rounded-[19px] ">
                <img src={VideoContent} alt="" width={"70px"} />
                <p className="title text-[30px] font-bold">Video Content</p>
                <p className="para text-[16px] text-[#000000B2]  font-light leading-8 text-center ">
                  Share video tutorials, lectures, and recorded <br />
                  sessions that help the community learn.
                </p>

                <ul className="flex flex-col text-[#000000B2] justify-between items-center list-disc marker:text-primary text-[21px]">
                  <li>HD Quality</li>
                  <li>Closed CAptions</li>
                  <li>Interactive Timestamps</li>
                </ul>
              </div>
              <div className="border-t-[0.1px] border-l-[0.1px] shadow-[#0000001A] shadow-md transition-transform duration-300 hover:-translate-y-2  border-[rgba(151,149,149,0.3)] flex flex-col justify-between items-center px-6 py-8 w-100 h-105 rounded-[19px] ">
                <img src={codeRepo} alt="" width={"70px"} />
                <p className="title text-[30px] font-bold">Code Repositories</p>
                <p className="para text-[16px] text-[#000000B2]  font-light leading-8 text-center">
                  Share GitHub projects, code samples and <br />
                  programming resouces.
                </p>

                <ul className="flex flex-col text-[#000000B2] justify-between items-center list-disc marker:text-primary text-[21px]">
                  <li>Version Control</li>
                  <li>Collaborative Editing</li>
                  <li>Smart Search</li>
                </ul>
              </div>
              <div className="border-t-[0.1px] border-l-[0.1px] shadow-[#0000001A] shadow-md transition-transform duration-300 hover:-translate-y-2  border-[rgba(151,149,149,0.3)] flex flex-col justify-between items-center px-6 py-8 w-100 h-105 rounded-[19px] ">
                <img src={doc} alt="" width={"70px"} />
                <p className="title text-[30px] font-bold">Articles & Docs</p>
                <p className="para text-[16px] text-[#000000B2]  font-light leading-8 text-center">
                  Comphrehensive documentation, researc <br />
                  papers, and knowledge articles.
                </p>

                <ul className="flex flex-col text-[#000000B2] justify-between items-center list-disc marker:text-primary text-[21px]">
                  <li>Rich Text Editor </li>
                  <li>Citation Support</li>
                  <li>Peer Review</li>
                </ul>
              </div>

              <div className="border-t-[0.1px] border-l-[0.1px] shadow-[#0000001A] shadow-md transition-transform duration-300 hover:-translate-y-2  border-[rgba(151,149,149,0.3)] flex flex-col justify-evenly items-center w-105 h-50 rounded-[19px] ">
                <img src={Download} alt="" width={"40px"} />
                <p className="title text-[30px] text-primary font-bold">
                  2.5k+
                </p>
                <p className="para text-[16px] font-light">
                  Download Resources
                </p>
              </div>

              <div className="border-t-[0.1px] border-l-[0.1px] shadow-[#0000001A] shadow-md transition-transform duration-300 hover:-translate-y-2  border-[rgba(151,149,149,0.3)] flex flex-col justify-evenly items-center  w-105 h-50 rounded-[19px] ">
                <img src={share} alt="" width={"30px"} />
                <p className="title text-[30px] text-primary font-bold">
                  1.2k+
                </p>
                <p className="para text-[16px] font-light">Share Knowledge</p>
              </div>

              <div className="border-t-[0.1px] border-l-[0.1px] shadow-[#0000001A] shadow-md transition-transform duration-300 hover:-translate-y-2  border-[rgba(151,149,149,0.3)] flex flex-col justify-evenly items-center  w-105 h-50 rounded-[19px] ">
                <img src={join} alt="" width={"40px"} />
                <p className="title text-[30px] text-primary font-bold">800+</p>
                <p className="para text-[16px] font-light">Join Discussion</p>
              </div>
            </div>
          </section>

          {/* about 3 */}
          <section className="pl-23.5 pr-15.5 flex flex-col justify-evenly bg-[#F4F4F480]  pt-16 h-275">
            {/* top */}
            <div className=" flex flex-col gap-7  justify-center items-center ">
              <p className="font-bold text-[41.5px] text-center ">
                Access Resources. Share Your Insights. <br />
                <span className="text-primary">Collaborate</span> with Peers
              </p>
              <p className="leading-8 text-sm text-center text-[#000000CC] text-[17px] font-light">
                Log in using your Herald email to access exclusive content,
                contributw your works,
                <br />
                and grow with the learning community.
              </p>
            </div>

            {/* middle cards */}
            <div className=" h-92.5 flex flex-row justify-between items-center ">
              <div className="flex flex-col justify-around items-center p-6 w-105 h-75 rounded-[19px] ">
                <img src={PeerLearning} alt="" width={"70px"} />
                <p className="title text-[30px] font-bold">Peer Learning</p>
                <p className="para text-center text-[16px] text-[#000000B2] font-light">
                  Learn from fellow students and share <br /> your expertise
                </p>
              </div>

              <div className="flex flex-col justify-around items-center p-6 w-105 h-75 rounded-[19px] ">
                <img src={InstantAccess} alt="" width={"70px"} />
                <p className="title text-[30px] font-bold">Instant Access</p>
                <p className="para text-center text-[16px] text-[#000000B2] font-light">
                  Get immediate access to a wealth of <br /> educational
                  resources
                </p>
              </div>
              <div className="flex flex-col justify-around items-center p-6 w-105 h-75 rounded-[19px] ">
                <img src={CommunitySupport} alt="" width={"70px"} />
                <p className="title text-[30px] font-bold">Community Support</p>
                <p className="para text-center text-[16px] text-[#000000B2] font-light">
                  Join a supportive community of <br /> learners and educators
                </p>
              </div>
            </div>

            {/* bottom button */}
            <div className="flex justify-center items-center ">
              <div className="flex flex-col justify-center gap-5 items-center border-[0.5px] border-[#00000026] rounded-[20px] px-10 bg-white h-58">
                <p className="text-[30px] font-bold ">Ready to Get Started?</p>
                <p className="text-[16px] text-[#000000B2] text-center">
                  Join thousands of Herald College students and faculty <br />{" "}
                  already collaborating.
                </p>
                <button className="px-6 py-2 text-white  text-[14px] font-medium mt-1 bg-[#74BF44CC] hover:bg-[#A4C93A]  flex flex-row justify-center gap-2 w-full rounded-[5.5px]">
                  Login with Herald email{" "}
                  <img src={arrow} alt="arrow" width={"15px"} />
                </button>
              </div>
            </div>
          </section>

          {/* contact us */}
          <div className="pl-23.5 pr-15.5 py-10 flex flex-col gap-4">
            <img src={hckLog} alt="" />
            <div className="flex flex-row justify-between">
              <div className="firstCol flex flex-col">
                <div className="flex flex-row gap-2">
                  <img src={location} alt="" />
                  <p className="text-[11px]">Bhagawati Marga, Naxal</p>
                </div>
                <div className="flex flex-row gap-2">
                  <img src={phone} alt="" />
                  <p className="text-[11px]">+977 9801022637</p>
                </div>
                <div className="flex flex-row gap-2">
                  <img src={message} alt="" />
                  <p className="text-[11px]">info2heraldCollege.edu.np</p>
                </div>
              </div>
              <div className="secondCol flex flex-col justify-between"></div>
            </div>
          </div>

          {/* footer */}
          <div className="footer pl-23.5 pr-15.5 py-8 flex flex-col gap-4 justify-around items-center ">
            <p className="top text-[#00000099] text-[19px]">Developed by </p>
            <div className="flex flex-row justify-around items-center w-full ">
              <div className="member flex flex-col ">
                <p className="name text-[16px] font-bold">Swornim Sanjel</p>
                <p className="position text-[14px] text-[#00000099]">
                  UI/UX Designer
                </p>
              </div>
              <div className="member flex flex-col ">
                <p className="name text-[16px] font-bold">Swornim Sanjel</p>
                <p className="position text-[14px] text-[#00000099]">
                  Frontend Developer
                </p>
              </div>
              <div className="member flex flex-col ">
                <p className="name text-[16px] font-bold">Swornim Sanjel</p>
                <p className="position text-[14px] text-[#00000099]">
                  Frontend Developer
                </p>
              </div>
              <div className="member flex flex-col ">
                <p className="name text-[16px] font-bold">Swornim Sanjel</p>
                <p className="position text-[14px] text-[#00000099]">
                  Backend Developer
                </p>
              </div>
            </div>
            <p className="copyright mt-20">
              &copy; 2025 Herald College Kathmandu. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
