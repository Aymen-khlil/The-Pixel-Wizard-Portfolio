import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import "./button.css";

import plume from "../../../public/buttons/plume.png";
import { BrowserView, MobileView } from "react-device-detect";

const Plume = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <BrowserView>
        <a
          href="/cv/Mohamed Aymen Khlil-Full Stack developer - Resume.pdf"
          download={true}
          className="hidden lg:block"
        >
          <motion.button
            className="plume-btn border  flex items-center justify-between pr-4  overflow-hidden rounded-md h-12 "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
              width: isHovered ? "auto" : 50,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.div
              className="flex whitespace-nowrap  items-center justify-center gap-2"
              animate={{ opacity: 1, x: isHovered ? 10 : -75 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p className="text-sm">Download CV</p>
              <Image src={plume} alt="Plume" width={30} height={30} />
            </motion.div>
          </motion.button>
        </a>
        <a
          href="/cv/Mohamed Aymen Khlil-Full Stack developer - Resume.pdf"
          download={true}
          className="block lg:hidden w-full "
        >
          <button className="plume-btn flex items-center justify-between p-3.5 w-full">
            <p className="text-[12px]">Download CV</p>
          </button>
        </a>
      </BrowserView>
      <MobileView>
        <a
          href="/cv/Mohamed Aymen Khlil-Full Stack developer - Resume.pdf"
          download={true}
          className="block lg:hidden w-full "
        >
          <button className="plume-btn flex items-center justify-between p-3.5 w-full">
            <p className="text-[12px]">Download CV</p>
          </button>
        </a>
      </MobileView>
    </>
  );
};

export default Plume;
