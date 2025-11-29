import Image from "next/image";
// import griffendor from "./images/Griffindor.png";
// import hupperpuf from "./images/Hufflepuff.png";
// import ravenclaw from "./images/Ravenclaw.png";
// import slytherin from "./images/Slytherin.png";
// import mudblood from "./images/Mudblood.png";

import griffendor from "./images/Griffindor-pixalated.png";
import hupperpuf from "./images/Hufflepuff-pixalated.png";
import ravenclaw from "./images/Ravenclaw-pixalated.png";
import slytherin from "./images/Slytherin-pixalated.png";
import mudblood from "./images/Mudblood-pixalated.png";

import { motion } from "framer-motion";
import "./caracter.css";
import { useThemeStore } from "@/store/theme/themeStore";

const Caracter = () => {
  const { theme } = useThemeStore();

  const whichCaracter = () => {
    switch (theme) {
      case "gryffindor-theme":
        return griffendor;
      case "slytherin-theme":
        return slytherin;
      case "ravenclaw-theme":
        return ravenclaw;
      case "hufflepuff-theme":
        return hupperpuf;
      default:
        return mudblood;
    }
  };

  return (
    <motion.div
      key={theme || "no-theme"} // IMPORTANT for re-animation on change
      initial={{ opacity: 0, y: -30 }} // when entering
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Floating animation wrapper */}
      <motion.div
        animate={{
          y: [0, -5, 0], // slight hover up/down
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image src={whichCaracter()} alt={theme} />
      </motion.div>
    </motion.div>
  );
};

export default Caracter;
