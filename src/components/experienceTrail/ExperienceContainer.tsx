import "./experienceTrail.css";
import ExperienceCard from "./ExperienceCard";
import Image from "next/image";
import ExpWand from "./images/exp-wand.png";

// Sample experience data - replace with your actual data
const experiences = [
  {
    title: "Senior Developer",
    description:
      "Built amazing features and led the team to success. This card will expand when it reaches the center of your viewport!",
  },
  {
    title: "Full Stack Engineer",
    description:
      "Worked on both frontend and backend systems. Watch how each card animates independently as you scroll.",
  },
  {
    title: "Software Engineer",
    description:
      "Started my journey in tech, learning and growing every day. The gem changes color when active!",
  },
  {
    title: "",
    description: "",
  },
];

const ExperienceContainer = () => {
  return (
    <div className="  h-full flex flex-col">
      <div className="relative flex justify-center flex-col items-center py-  overflow-y-auto flex-1">
        <Image
          src={ExpWand}
          alt="Wand"
          width={24}
          height={24}
          className="absolute left-0 top-0 "
        />
        <div className="experience-container z-10  overflow-y-auto max-h-screen w-full space-y-7 pr-20 pb-10 ">
          {experiences.map((exp, index) => (
            <ExperienceCard
              isLast={index === experiences.length - 1}
              key={exp.title + index}
              title={exp.title}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceContainer;
