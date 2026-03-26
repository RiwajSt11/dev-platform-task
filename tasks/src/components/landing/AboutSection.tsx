import card1img from "../../assets/landingPage/About1/card1Img.svg";
import card2img from "../../assets/landingPage/About1/card2Img.svg";
import card3img from "../../assets/landingPage/About1/card3Img.svg";

function AboutSection() {
  const cardInfo = [
    {
      image: card1img,
      title: "Teacher Moderation",
      description: `Curated content with quality assurance from <br /> our experienced
    faculty members to maintain <br />
    educational standards.`,
    },
    {
      image: card2img,
      title: "Student Contributions",
      description: `Empower students to share knowledge, collaborate <br /> on projects,
            and learn from peer experiences.`,
    },
    {
      image: card3img,
      title: "Tag-Based Discovery",
      description: `Smart categorization and tagging system makes <br />
            finding relevant resources quick and intuitive.`,
    },
  ];
  return (
    <section className="pl-23.5 pr-15.5 flex flex-col justify-between  h-250 py-80 ">
      {/* top */}
      <div className="texts flex flex-col gap-5 justify-center items-center ">
        <p className="font-bold text-[41.5px] text-center text-[#000000BF] leading-13 ">
          Designed for smarter{" "}
          <span className="text-primary">collaboration</span> <br /> between
          students & educators <br /> at Herald College
        </p>
        <p className="leading-8 text-sm text-center text-[#000000CC] text-[17px] font-light">
          Our platform combines the best of educational technology with
          intuitive design to <br /> create an environment where knowledge flows
          freely and learning thrives.
        </p>
      </div>

      {/* bottom cards */}
      <div className=" h-92.5 flex flex-row justify-between items-center mt-20">
        {cardInfo.map((card, index) => (
          <div
            key={index}
            className="border-t-[0.1px] border-l-[0.1px] shadow-[#0000001A] shadow-md transition-transform duration-300 hover:-translate-y-1.25  border-[rgba(151,149,149,0.3)] flex flex-col justify-around p-6 w-110 h-70 rounded-[19px] "
          >
            <img src={card.image} alt="" width={"50px"} />
            <p className="title text-[30px] font-bold">{card.title}</p>
            <p className="para text-[16px] text-[#000000B2] font-light">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
