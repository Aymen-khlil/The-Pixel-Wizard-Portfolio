import { ReactNode } from "react";
import "./button.css";
import { cn } from "@/lib/cn";
import { useThemeStore } from "@/store/theme/themeStore";
import { motion } from "framer-motion";

const ActionButton = ({
  children,
  onClick,
  delayAnimation = 0,
}: {
  children: ReactNode;
  onClick?: () => void;
  delayAnimation?: number;
}) => {
  const { theme } = useThemeStore();
  const themeSwitcher = () => {
    switch (theme) {
      case "gryffindor-theme":
        return "gryffindor-btn";

      case "slytherin-theme":
        return "slytherin-btn";

      case "ravenclaw-theme":
        return "ravenclaw-btn";

      case "hufflepuff-theme":
        return "huffelpuff-btn";

      default:
        return "action-btn";
    }
  };

  return (
    <motion.div
      className="  active:scale-[0.9]"
      initial={{ opacity: 0, scale: 1.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: delayAnimation,
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <button className={cn(themeSwitcher(), "action-text")} onClick={onClick}>
        {children}
      </button>
    </motion.div>
  );
};

export default ActionButton;
