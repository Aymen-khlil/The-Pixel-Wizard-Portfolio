"use client";

import Link from "next/link";
import "./navbar.css";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useThemeStore } from "@/store/theme/themeStore";
import { cn } from "@/lib/cn";
const Navbar = () => {
  const pathname = usePathname();
  const { theme } = useThemeStore();
  const themeSwitcher = () => {
    switch (theme) {
      case "gryffindor-theme":
        return "gryffindor-banner";

      case "slytherin-theme":
        return "slytherin-banner";

      case "ravenclaw-theme":
        return "ravenclaw-banner";

      case "hufflepuff-theme":
        return "huffelpuff-banner";

      default:
        return "banner";
    }
  };

  const whichRoute = () => {
    switch (pathname) {
      case "/marauder-map":
        return "Marauder's Map";

      case "/choose-your-house":
        return "Houses";

      case "/spellbook":
        return "Spellbook";

      case "/the-pensieve-archives":
        return "The Pensieve Archives";

      case "/send-an-owl":
        return "The Owlery";

      default:
        return "--";
    }
  };
  return (
    <motion.div
      className="w-full mt-2 flex items-center justify-center"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
    >
      <div
        className={cn(
          themeSwitcher(),
          "flex items-center justify-center w-full"
        )}
      >
        <div className="navbar-title w-[60%] uppercase hidden md:block">
          {whichRoute()}
        </div>
        <div className=" w-full flex justify-around items-center uppercase  flex-wrap">
          <Link
            href={"/choose-your-house"}
            className={`${
              pathname === "/choose-your-house"
                ? "action-active"
                : "navbar-action"
            } `}
          >
            Houses
          </Link>
          <Link
            href={"/marauder-map"}
            className={`${
              pathname === "/marauder-map" ? "action-active" : "navbar-action"
            } `}
          >
            About
          </Link>
          <Link
            href={"/spellbook"}
            className={`${
              pathname === "/spellbook" ? "action-active" : "navbar-action"
            } `}
          >
            Skills
          </Link>
          <Link
            href={"/the-pensieve-archives"}
            className={`${
              pathname === "/the-pensieve-archives"
                ? "action-active"
                : "navbar-action"
            } `}
          >
            Experience
          </Link>
          <Link
            href={"/send-an-owl"}
            className={`${
              pathname === "/send-an-owl" ? "action-active" : "navbar-action"
            } `}
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
