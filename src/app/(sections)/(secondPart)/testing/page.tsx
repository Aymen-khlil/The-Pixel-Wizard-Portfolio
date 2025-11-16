"use client";

import { motion } from "framer-motion";

const TheTest = () => {
  return (
    <motion.div
      className="h-full flex overflow-hidden"
      style={{
        backgroundImage: "url(/backgrounds/mauraudarMap.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 4,
        ease: "easeOut",
      }}
    >
      <motion.div
        className=" w-[50%]"
        style={{
          backgroundImage: "url(/leftSide.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          color: "white",
        }}
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        aze
      </motion.div>

      <motion.div
        className=" w-[50%]"
        style={{
          backgroundImage: "url(/rightSide.png)",
          backgroundSize: "fit",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
        }}
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        aaasdvedfgraa
      </motion.div>
    </motion.div>
  );
};

export default TheTest;
