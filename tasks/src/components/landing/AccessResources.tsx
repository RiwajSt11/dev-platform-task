import arrow from "../../assets/landingPage/heroSection/Arrow.svg";
import PeerLearning from "../../assets/landingPage/About3/PeerLearning.svg";
import InstantAccess from "../../assets/landingPage/About3/InstantAccess.svg";
import CommunitySupport from "../../assets/landingPage/About3/CoomunitySupport.svg";

function AccessResources() {
  return (
    <section className="border border-black pl-23.5 pr-15.5 flex flex-col justify-evenly items-center bg-[#F4F4F480]  pt-16 h-275">
      {/* top */}
      <div className=" flex flex-col gap-7  justify-center items-center ">
        <p className="font-semibold text-[41.5px] text-center ">
          Access Resources. Share Your Insights. <br />
          <span className="text-primary">Collaborate</span> with Peers
        </p>
        <p className="leading-8 text-sm text-center text-[#000000CC] text-[17px] font-light">
          Log in using your Herald email to access exclusive content, contributw
          your works,
          <br />
          and grow with the learning community.
        </p>
      </div>

      {/* middle cards */}
      <div className=" h-92.5 flex flex-row justify-around items-center gap-22  ">
        <div className="flex flex-col justify-around items-center py-6 w-fit h-75 rounded-[19px] ">
          <img src={PeerLearning} alt="" width={"70px"} />
          <p className="title text-[25px] font-semibold">Peer Learning</p>
          <p className="para text-center text-[17px] text-[#000000B2] font-light">
            Learn from fellow students and share <br /> your expertise
          </p>
        </div>

        <div className="flex flex-col justify-around items-center py-6 w-fit h-75 rounded-[19px] ">
          <img src={InstantAccess} alt="" width={"70px"} />
          <p className="title text-[25px] font-semibold">Instant Access</p>
          <p className="para text-center text-[17px] text-[#000000B2] font-light">
            Get immediate access to a wealth of <br /> educational resources
          </p>
        </div>
        <div className="flex flex-col justify-around items-center py-6 w-fit h-75 rounded-[19px] ">
          <img src={CommunitySupport} alt="" width={"70px"} />
          <p className="title text-[25px] font-semibold">Community Support</p>
          <p className="para text-center text-[17px] text-[#000000B2] font-light">
            Join a supportive community of <br /> learners and educators
          </p>
        </div>
      </div>

      {/* bottom button */}
      <div className="flex justify-center items-center tracking-wider ">
        <div className="flex flex-col justify-center gap-5 items-center border-[0.5px] border-[#00000026] rounded-[20px] bg-white w-136.25 h-66">
          <p className="text-[30px] font-bold ">Ready to Get Started?</p>
          <p className="text-[16px] text-[#000000B2] text-center">
            Join thousands of Herald College students and faculty <br /> already
            collaborating.
          </p>
          <button className="px-6 py-2 text-white  text-[14px] font-medium mt-1 bg-[#74BF44CC] hover:bg-[#A4C93A]  flex flex-row justify-center gap-2 w-[70%] rounded-[5.5px]">
            Login with Herald email
            <img src={arrow} alt="arrow" width={"15px"} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AccessResources;
