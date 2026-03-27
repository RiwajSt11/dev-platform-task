import { ExtraLearningsCard } from "../../layouts/HomePageCard";

export const LevelCardElDisplay = () => {
  const cardInfo = [
    {
      faculty: "Web Development",
      title: "React.js",
      description:
        "Build dynamic user interfaces using resuable components, state management, and modern frontend architecture with React.",
        contributor:"Student"
    },
    {
      faculty: "Big Data",
      title: "Apache Spark",
      description:
        "A fast, unified analytics engine for large-scale data processing with built-in modules for streaming, SQL, machine learning, and graph...",
        contributor:"Student"
    },
    {
      faculty: "Web Development",
      title: "Express.js",
      description:
        "Develop scalable backend APIs and server-side logic using minimal and flexible Node.js-powered Express framweork.",
        contributor:"Student"
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-10 mt-4">
      {cardInfo.map((card, index) => (
        <ExtraLearningsCard
          faculty={card.faculty}
          title={card.title}
          description={card.description}
          contributor={card.contributor}
          key={index}
        />
      ))}
    </div>
  );
};
