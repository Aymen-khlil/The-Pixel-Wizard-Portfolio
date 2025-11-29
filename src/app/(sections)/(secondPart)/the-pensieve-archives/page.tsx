"use client";
import Navbar from "@/components/navbar/Navbar";
import "./experience.css";
import ExperienceContainer from "@/components/experienceTrail/ExperienceContainer";
import Caracter from "@/components/houseCaracters/Caracter";

const Experiences = () => {
  return (
    <div className="experience-holder flex flex-col h-screen">
      <div className="lg:px-40">
        <Navbar />
      </div>
      <div className="flex-1 h-full  flex justify-center my-10 lg:px-40 overflow-auto lg:gap-20">
        <div className=" items-center hidden lg:flex ">
          <Caracter />
        </div>
        <ExperienceContainer />
      </div>
    </div>
  );
};

export default Experiences;
