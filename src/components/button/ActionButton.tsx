import { ReactNode } from "react";
import "./button.css";
import { cn } from "@/lib/cn";
import { useThemeStore } from "@/store/theme/themeStore";

const ActionButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
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
    <button className={cn(themeSwitcher(), "action-text")} onClick={onClick}>
      {children}
    </button>
  );
};

export default ActionButton;
