"use client";
import "./testcss.css";
import { motion } from "framer-motion";
import { useState } from "react";

const TheTest = () => {
  const [taller, setTaller] = useState(false);

  return (
    <div className="content-mask bg-red-500 h-full">
      <motion.div
        className="card w-60 h-6"
        whileHover={{
          height: "400px",
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
      >
        aze
      </motion.div>
      <div className="card w-48 h-[400px]">aze</div>
    </div>
  );
};

export default TheTest;
