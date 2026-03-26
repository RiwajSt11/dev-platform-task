import VideoContent from "../../assets/landingPage/About2/VideoContent.svg";
import codeRepo from "../../assets/landingPage/About2/CodeRepo.svg";
import doc from "../../assets/landingPage/About2/Docs.svg";
import Download from "../../assets/landingPage/About2/Download.svg";
import share from "../../assets/landingPage/About2/Share.svg";
import join from "../../assets/landingPage/About2/Join.svg";

function ShareContent() {
  const cardInfo = [
    {
      image: VideoContent,
      title: "Video Content",
      description: `Share video tutorials, lectures, and recorded <br />
            sessions that help the community learn.`,
      listInfo: ["HD Quality", "Closed Caption", "Interactive Timestamps"],
    },
    {
      image: codeRepo,
      title: "Code Repositories",
      description: `Share GitHub projects, code samples and <br />
            programming resouces.`,
      listInfo: ["Version Control", "Collaborative Editing", "Smart Search"],
    },
    {
      image: doc,
      title: "Articles & Docs",
      description: `Comphrehensive documentation, researc <br />
            papers, and knowledge articles.`,
      listInfo: ["Rich Text Editor", "Citation Support", "Peer Review"],
    },
  ];

  const smallCardInfo = [
    {
      image: Download,
      title: "2.5k+",
      description: `Download Resources`,
    },
    {
      image: share,
      title: "1.2k+",
      description: `Share Knowledge`,
    },
    {
      image: join,
      title: "800+",
      description: `Join Discussion`,
    },
  ];
  return (
    <section className="pl-23.5 pr-15.5 flex flex-col justify-between h-275 mt-30">
      {/* top */}
      <div className="  flex flex-col gap-7  justify-center items-center ">
        <p className="font-bold text-[41.5px] text-center ">
          Share Various Types of <span className="text-primary">Content</span>
        </p>
        <p className="leading-8 text-sm text-center text-[#000000CC] text-[17px] font-light">
          From video tutorials to research papers, discover educational content
          that helps the <br /> community thrive and grow together.
        </p>
      </div>

      {/* bottom cards */}
      <div className="  grid grid-cols-3 grid-rows-2 gap-x-12 items-center ">
        {cardInfo.map((card, index) => (
          <div
            key={index}
            className="border-t-[0.1px] border-l-[0.1px] shadow-[#0000001A] shadow-md transition-transform duration-300 hover:-translate-y-2  border-[rgba(151,149,149,0.3)] flex flex-col justify-between items-center px-6 py-8 w-100 h-105 rounded-[19px] "
          >
            <img src={card.image} alt="" width={"70px"} />
            <p className="title text-[30px] font-bold">{card.title}</p>
            <p className="para text-[16px] text-[#000000B2]  font-light leading-8 text-center ">
              {card.description}
            </p>

            <ul className="flex flex-col text-[#000000B2] justify-between items-center list-disc marker:text-primary text-[21px]">
              {card.listInfo.map((iteam, index) => (
                <li key={index}>{iteam}</li>
              ))}
            </ul>
          </div>
        ))}

        {smallCardInfo.map((cards, index) => (
          <div
            key={index}
            className="border-t-[0.1px] border-l-[0.1px] shadow-[#0000001A] shadow-md transition-transform duration-300 hover:-translate-y-2  border-[rgba(151,149,149,0.3)] flex flex-col justify-evenly items-center w-105 h-50 rounded-[19px] "
          >
            <img src={cards.image} alt="" width={"40px"} />
            <p className="title text-[30px] text-primary font-bold">
              {cards.title}
            </p>
            <p className="para text-[16px] font-light">{cards.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShareContent;
