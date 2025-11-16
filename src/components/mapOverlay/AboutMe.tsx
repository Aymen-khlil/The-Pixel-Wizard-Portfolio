import { motion } from "framer-motion";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        className="h-full w-full"
        style={{
          backgroundImage: "url(/backgrounds/mauraudarMap.png)",
          backgroundSize: "cover",
          backgroundPosition: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        zeze
      </motion.div>
    </div>
  );
};

export default AboutMe;
