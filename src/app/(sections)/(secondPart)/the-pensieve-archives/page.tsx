"use client";
import Navbar from "@/components/navbar/Navbar";
import "./experience.css";
import ExperienceContainer from "@/components/experienceTrail/ExperienceContainer";
import Caracter from "@/components/houseCaracters/Caracter";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Experiences = () => {
  return (
    <div className="experience-holder flex flex-col h-screen">
      <Image
        src="/backgrounds/exp-background.png"
        alt="Experience background"
        fill
        priority
        className="object-cover -z-10"
        quality={90}
      />
      <div className="lg:px-40">
        <Navbar />
      </div>
      <div className="flex-1 h-full  flex justify-center my-10 lg:px-40 overflow-auto lg:gap-20">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: -100 }}
            className=" items-center hidden lg:flex "
          >
            <Caracter />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: 100 }}
          >
            <ExperienceContainer />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Experiences;
