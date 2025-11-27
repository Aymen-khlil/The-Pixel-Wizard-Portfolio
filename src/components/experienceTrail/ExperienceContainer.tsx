import "./experienceTrail.css";
import ExperienceCard from "./ExperienceCard";
import Image from "next/image";
import ExpWand from "./images/exp-wand.png";

// Sample experience data - replace with your actual data
const experiences = [
  {
    title: "FRONT-END DEVELOPER INTERN",

    description: (
      <div>
        <div className="text-[10px] space-y-2">
          <p>
            Company: <span className="uppercase">Martechlabs</span>
          </p>
          <p>Location: Tunis, Tunisia</p>
          <p>Duration: June 2022 – April 2023</p>
          <p>
            Technologies: React, Typescript, Material UI, Tailwind, Flowbite,
            Node TS, Express, Ant Design.
          </p>
        </div>
        <div className="text-[10px] pt-1">
          <ul className="pl-3 space-y-2">
            <li>
              - Developed e-commerce platform with COD payment for drop-shippers
              and internal employee management web app.
            </li>
            <li>
              - Converted UI/UX wireframes from Zeplin into high-quality,
              responsive code.
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    customHeight: "500px",
    title: "FRONT-END DEVELOPER",
    description: (
      <div>
        <div className="text-[10px] space-y-2">
          <p>
            Company: <span className="uppercase">Martechlabs</span>
          </p>
          <p>Location: Tunis, Tunisia</p>
          <p>Duration: June 2023 – April 2025</p>
          <p>
            Technologies: React Vite,Typescript, Zustand, Tailwind, Shadcn,
            Formik, Yup, React-Hot-Toast, Recharts
          </p>
        </div>
        <div className="text-[10px] pt-1">
          <ul className="pl-3 space-y-2">
            <li>
              - Implemented clean UI with Tailwind, tailwind-merge, clsx, and
              managed global state with Zustand.
            </li>
            <li>
              - Created data visualizations with Recharts and FullCalendar.
            </li>
            <li>- Managed forms with Formik and validation with Yup.</li>
            <li>- Converted UI/UX wireframes into responsive code.</li>
            <li>
              - Maintained web applications for performance and scalability.
            </li>
            <li>- Contributed to Jira user stories in an Agile team.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    customHeight: "500px",
    title: "FULL-STACK DEVELOPER",
    description: (
      <div>
        <div className="text-[10px] space-y-2">
          <p>
            Company: <span className="uppercase">Martechlabs</span>
          </p>
          <p>Location: Tunis, Tunisia</p>
          <p>Duration: May 2025 – Present</p>
          <p>
            Technologies: Typescript, React Vite, Zustand, Tailwind, NodeTS,
            MongoDB, Nest, APIs (ActiveCampaign, Groove, Google Ads, Serper)
          </p>
        </div>
        <div className="text-[10px] pt-1">
          <ul className="pl-3 space-y-2">
            <li>
              - Integrated ActiveCampaign APIs to automate user creation, list
              management, and tagging.
            </li>
            <li>- Built and maintained RESTful APIs.</li>
            <li>- Implemented Ticketing Automation with Groove API.</li>
            <li>
              - Integrated AI APIs (OpenAI, Anthropic-ai) and Google Ads Keyword
              Ideas API.
            </li>
            <li>
              - Implemented Server-Sent Events (SSE) to push server updates to
              clients.
            </li>
          </ul>
        </div>
      </div>
    ),
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
          className="absolute left-0 top-0 hidden lg:block"
        />
        <div className="experience-container z-10 overflow-y-auto scroll max-h-screen w-full space-y-7 pr-20 pb-10">
          {experiences.map((exp, index) => (
            <ExperienceCard
              isLast={index === experiences.length - 1}
              key={exp.title + index}
              title={exp.title}
              description={exp.description}
              customHeight={exp.customHeight}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceContainer;
