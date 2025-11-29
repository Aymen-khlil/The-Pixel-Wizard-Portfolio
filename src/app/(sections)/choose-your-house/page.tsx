"use client";

import HouseCardContainer from "@/components/houseCards/HouseCardContainer";
import griffendor from "../../../components/houseCards/images/Griffindor-logo.png";
import hupperpuf from "../../../components/houseCards/images/Hupperpuf-logo.png";
import ravenclaw from "../../../components/houseCards/images/Ravenclaw-logo.png";
import slytherin from "../../../components/houseCards/images/Slytherin-logo.png";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useState } from "react";
import StoryContainer from "@/components/sorting-hat-storytelling/StoryContainer";
import Caracter from "@/components/houseCaracters/Caracter";
import { useRouter } from "next/navigation";
import { useThemeStore } from "@/store/theme/themeStore";

const HousePicks = () => {
  const { setTheme } = useThemeStore();
  const router = useRouter();
  const [displayMessage, setDisplayMessage] = useState(true);

  const [hatMessage, setHatMessage] = useState(
    "Well well well… another confused human. Let's find you a house before you get lost."
  );
  const [displayBtn, setDisplayBtn] = useState(false);

  const houseMessages: Record<string, string> = {
    Gryffindor: "Ah yes, another hero in training… off to Gryffindor you go!",
    Hufflepuff: "Sweet, patient, probably loves snacks… definitely Hufflepuff.",
    Ravenclaw: "Big brain energy detected… off to Ravenclaw, genius.",
    Slytherin:
      "Ambition glowing like neon… try not to plot *too* much in Slytherin.",
  };

  const handleChoosingAHouse = (house: string) => {
    setHatMessage(houseMessages[house] || "Interesting… very interesting.");
    setDisplayMessage(true);
    setDisplayBtn(true);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center flex-col overflow-auto"
      style={{
        backgroundImage: "url(/backgrounds/hog-dining.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="lg:h-full w-full flex flex-col ">
          <div className="flex  items-end justify-center lg:h-[80%] pt-8 lg:pt-0 ">
            <Caracter />
          </div>

          <AnimatePresence mode={displayMessage ? "wait" : "sync"}>
            {displayMessage && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                className="h-36 lg:h-28 w-full flex items-center justify-center pb-4 lg:pb-0 "
              >
                <div className="h-full w-[90%] sm:w-[80%]">
                  <StoryContainer
                    hatMessage={hatMessage}
                    setDisplayMessage={setDisplayMessage}
                    displayBtn={displayBtn}
                    continueAction={() => router.push("/marauder-map")}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* House Cards Section */}
        <div className="flex lg:items-center justify-center lg:h-screen  py-8 lg:py-0">
          <MotionConfig
            transition={{
              delay: 5,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <motion.div className="grid grid-cols-4 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-2 px-4">
              <motion.div
                initial={{ opacity: 0, y: -30, scale: 1.2 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
              >
                <HouseCardContainer
                  houseName="Gryffindor"
                  houseImage={griffendor}
                  onClick={() => {
                    handleChoosingAHouse("Gryffindor");
                    setTheme("gryffindor-theme");
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30, scale: 1.2 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
              >
                <HouseCardContainer
                  houseName="Hufflepuff"
                  houseImage={hupperpuf}
                  onClick={() => {
                    handleChoosingAHouse("Hufflepuff");
                    setTheme("hufflepuff-theme");
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30, scale: 1.2 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
              >
                <HouseCardContainer
                  houseName="Ravenclaw"
                  houseImage={ravenclaw}
                  onClick={() => {
                    handleChoosingAHouse("Ravenclaw");
                    setTheme("ravenclaw-theme");
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 1.2 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
              >
                <HouseCardContainer
                  houseName="Slytherin"
                  houseImage={slytherin}
                  onClick={() => {
                    handleChoosingAHouse("Slytherin");
                    setTheme("slytherin-theme");
                  }}
                />
              </motion.div>
            </motion.div>
          </MotionConfig>
        </div>
      </div>
    </div>
  );
};

export default HousePicks;
