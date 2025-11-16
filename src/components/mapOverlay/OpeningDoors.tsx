import { motion } from "framer-motion";
import React from "react";

const OpeningDoors = () => {
  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/backgrounds/mauraudarMap.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 4,
          ease: "easeOut",
          delay: 4,
        }}
      >
        zeze
      </motion.div>

      <div className="relative h-full flex">
        <motion.div
          className="w-[50%] h-full overflow-hidden"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <div className="left-side w-full h-full"></div>
        </motion.div>

        <motion.div
          className="w-[50%] h-full overflow-hidden"
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <div className="right-side w-full h-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default OpeningDoors;
