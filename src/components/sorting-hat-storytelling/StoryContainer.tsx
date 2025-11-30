import { motion } from "framer-motion";
import Image from "next/image";
import "./storyTelling.css";
import sortingHat from "../../../public/sortingHat/sorting-hat.png";
import TextType from "../TextType";
import { Dispatch, SetStateAction } from "react";
import ActionButton from "../button/ActionButton";

const StoryContainer = ({
  hatMessage,
  setDisplayMessage,
  displayBtn,
  continueAction,
}: {
  hatMessage: string;
  setDisplayMessage: Dispatch<SetStateAction<boolean>>;
  displayBtn: boolean;
  continueAction?: () => void;
}) => {
  return (
    <motion.div className="message-container relative flex flex-col items-center justify-start w-full">
      <motion.div className="flex-1 message-content w-full grid grid-cols-7">
        <motion.div className=" ">
          <Image src={sortingHat} alt="Sorting hat" width={50} height={50} />
        </motion.div>
        <motion.div className=" text-[12px] sm:text-sm  col-span-6 ">
          <TextType key={hatMessage || "default-message"} text={hatMessage} />
        </motion.div>
      </motion.div>

      <div className="absolute -right-2 -top-2 ">
        <button
          className="close-button active:scale-[0.9]"
          onClick={() => setDisplayMessage(false)}
        >
          X
        </button>
      </div>
      {displayBtn && (
        <div
          key={hatMessage || "default-message-btn"}
          className="absolute -bottom-4  "
        >
          <ActionButton delayAnimation={4} onClick={continueAction}>
            {" "}
            Continue{" "}
          </ActionButton>
        </div>
      )}
    </motion.div>
  );
};

export default StoryContainer;
