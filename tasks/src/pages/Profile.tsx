import submitted from "../assets/profile/submitted.svg";
import approved from "../assets/profile/approved.svg";
import rejected from "../assets/profile/rejected.svg";
import profile from "../assets/profile/profile.svg";
import mail from "../assets/profile/mail.svg";
import program from "../assets/profile/program.svg";
import edit from "../assets/profile/edit.svg";

export const Profile = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col items-center pt-23 mb-43">
        <h1 className="text-primary text-[40px] tracking-wide pt-14.25">
          Profile
        </h1>
        <p className="text-black/60 mt-2 text-[19.5px]">
          Manage your account and view your activity
        </p>
        <div className="border border-black/30 w-208.75 h-79 mt-15.5 bg-white rounded-md shadow-[1px_2px_3px_rgba(0,0,0,0.25)]">
          <h1 className="text-primary text-[23px] tracking-wide px-10 pt-9.5">
            Activity Summary
          </h1>
          <div className="flex flex-1 justify-between mt-10.75 px-[40px] pr-[55px]">
            <div className="flex flex-col items-center justify-center">
              <img
                src={submitted}
                alt="submitted-img"
                className="w-14 h-14 mb-1"
              />
              <h3 className="text-4xl text-black/80 mt-5">3</h3>
              <h5 className="text-[17.5px] text-black/60 mt-3.25">
                Resource Submitted
              </h5>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={approved}
                alt="submitted-img"
                className="w-14 h-14 mb-1"
              />
              <h3 className="text-4xl text-primary mt-5">2</h3>
              <h5 className="text-[17.5px] text-black/60 mt-3.25">
                Resources Approved
              </h5>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={rejected}
                alt="submitted-img"
                className="w-14 h-14 mb-1"
              />
              <h3 className="text-4xl text-[#FF6262] mt-5">1</h3>
              <h5 className="text-[17.5px] text-black/60 mt-3.25">
                Resources Rejected
              </h5>
            </div>
          </div>
        </div>
        <div className="border border-black/30 w-208.75 h-84 mt-14 bg-white rounded-md shadow-[1px_2px_3px_rgba(0,0,0,0.25)] px-10 flex justify-between">
          <div>
            <h1 className="text-primary text-[23px] tracking-wide pt-9.5 mb-4.5">
              Account Information
            </h1>
            <div className="flex flex-col gap-6.25">
              <div className="flex gap-4.5 items-center">
                <img src={profile} alt="profile-img" className="w-9.5 h-9.5" />
                <div className="flex flex-col gap-1">
                  <h2 className="text-[15px] text-black/50">Name</h2>
                  <h2 className="text-[17.75px]">Ram Shrestha</h2>
                </div>
              </div>
              <div className="flex gap-4.5 items-center">
                <img src={mail} alt="profile-img" className="w-9.5 h-9.5" />
                <div className="flex flex-col gap-1">
                  <h2 className="text-[15px] text-black/50">Email</h2>
                  <h2 className="text-[17px]">
                    NP03CS4A240023@heraldcollege.edu.np
                  </h2>
                </div>
              </div>
              <div className="flex gap-4.5 items-center">
                <img src={program} alt="profile-img" className="w-9.5 h-9.5" />
                <div className="flex flex-col gap-1">
                  <h2 className="text-[15px] text-black/50">Program</h2>
                  <h2 className="text-[17px]">Computer Science - Level 4</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 mt-10 rounded-full bg-gray-200"></div>
            <div className="mt-3 flex gap-3.5 items-center">
              <img src={edit} alt="edit-img" className="w-5 h-5" />
              <p className="text-[17.75px]">Edit</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
