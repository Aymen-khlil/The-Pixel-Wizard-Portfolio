import Image from "next/image";
import Caracter from "../houseCaracters/Caracter";
import Navbar from "../navbar/Navbar";
import harryScar from "./images/harry-scar.png";
import ActionButton from "../button/ActionButton";
import { AnimatePresence, motion } from "framer-motion";
import Plume from "../button/Plume";

const AboutMeContent = () => {
  return (
    <div className="flex flex-col h-full  lg:px-40 overflow-y-auto">
      <Navbar />
      <div className=" flex-1   lg:grid lg:grid-cols-6  py-5 ">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeInOut",
            }}
            className="col-span-2  flex justify-center flex-col space-y-4 "
          >
            <div className="text-center text-[12px]">
              <p className="title-about-me text-center text-lg ">
                Mohamed Aymen Khlil
              </p>
              <p className="text-[10px]">Full stack developer</p>
            </div>

            <div className="flex items-center justify-center">
              <Caracter caracterImage="" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeInOut",
            }}
            className="col-span-4  flex items-center"
          >
            <div className="scroll-about w-full max-h-full">
              <div className="text-[11px] space-y-4 overflow-y-auto">
                <p>
                  I’m a flexible and passionate developer transitioning from
                  frontend to full-stack. Nearly 2 years experience in creating
                  web apps.
                </p>
                <p>
                  Currently working as a Full-Stack Developer, I’ve contributed
                  to projects across the entire development lifecycle—from
                  building RESTful APIs with NestJS and MongoDB to developing
                  modern frontend experiences. I enjoy solving challenging
                  problems, improving performance, and turning UI/UX concepts
                  into reliable, production-ready features.
                </p>
                <p>
                  Before getting into full-stack development, I spent years
                  honing strong communication, leadership, and
                  project-management skills, including leading a 19+ member team
                  at AIESEC. These experiences help me collaborate effectively
                  and bring structure, clarity, and initiative to the teams I
                  work with.
                </p>
                <div>
                  <p className="title-about-me">
                    What can i bring to the table
                  </p>
                  <div className="space-y-4 pt-2">
                    <div className="flex gap-2  text-[11px] ">
                      <div className="shrink-0">
                        <Image
                          src={harryScar}
                          width={15}
                          height={15}
                          alt="Harry Scar"
                        />
                      </div>
                      <p>
                        Good foundations with real experience delivering
                        end-to-end features.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <div className="shrink-0">
                        <Image
                          src={harryScar}
                          width={15}
                          height={15}
                          alt="Harry Scar"
                        />
                      </div>
                      <p>
                        A problem-solving mindset focused on clean, scalable
                        solutions.
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <div className="shrink-0">
                        <Image
                          src={harryScar}
                          width={15}
                          height={15}
                          alt="Harry Scar"
                        />
                      </div>
                      <p>
                        Communication developed through managing and
                        coordinating teams.
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <div className="shrink-0">
                        <Image
                          src={harryScar}
                          width={15}
                          height={15}
                          alt="Harry Scar"
                        />
                      </div>
                      <p>
                        A fast-learning attitude and drive to constantly improve
                        and explore new tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-5 md:flex space-y-5 md:gap-2 md:justify-between">
                <motion.div className=" w-full md:max-w-fit ">
                  <Plume />
                </motion.div>
                <motion.div
                  className="active:scale-[0.9]"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <ActionButton>Continue</ActionButton>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutMeContent;
