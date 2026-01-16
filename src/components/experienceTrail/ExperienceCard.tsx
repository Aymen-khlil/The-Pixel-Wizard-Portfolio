"use client";

import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import OffGem from "../../../public/experience/off-gem.png";
import OnGem from "../../../public/experience/on-gem.png";
import { useRef, useState, useEffect } from "react";
import { useWindowSize } from "../../lib/detectscreen";

interface ExperienceCardProps {
  title: string;
  description: React.ReactNode;
  isLast: boolean;
  customHeight?: string;
}

const ExperienceCard = ({
  title,
  description,
  isLast,
  customHeight = "400px",
}: ExperienceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [containerElement, setContainerElement] = useState<HTMLElement | null>(
    null
  );

  // Find the scrolling container on mount
  useEffect(() => {
    if (cardRef.current) {
      // Find the .experience-holder parent which has overflow-y-auto
      const scrollContainer = cardRef.current.closest(
        ".experience-container"
      ) as HTMLElement;
      setContainerElement(scrollContainer);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    container: containerElement ? { current: containerElement } : undefined,
    offset: ["start end", "start center"],
  });

  const [isAtCenter, setIsAtCenter] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsAtCenter(latest > 0.2);
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    [0, 0.7, 1]
  );

  const { width } = useWindowSize();

  const expandedHeight =
    width && width < 600 ? `calc(${customHeight} + 150px)` : customHeight;

  return (
    <div className="flex items-start  gap-20 py-10">
      <div className=" hidden lg:block">
        {isLast ? (
          <Image
            className="opacity-50"
            src={OffGem}
            alt=""
            width={24}
            height={24}
          />
        ) : (
          <motion.div
            className="shrink-0 pt-2  "
            initial={{ opacity: 0.5 }}
            animate={{ opacity: isAtCenter ? 1 : 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src={isAtCenter ? OnGem : OffGem}
              alt=""
              width={24}
              height={24}
            />
          </motion.div>
        )}
      </div>

      <div className=" w-full">
        {isLast ? (
          <div
            ref={cardRef}
            className="experience-card  max-w-[500px] min-w-[350px] overflow-hidden h-6 flex items-center justify-center "
          >
            <div className=" text-[var(--navbar-highlight)]">
              Next Adventure
            </div>
          </div>
        ) : (
          <motion.div
            ref={cardRef}
            initial={{ height: "40px" }}
            animate={{
              height: isAtCenter ? expandedHeight : "40px",
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="experience-card max-w-[500px] min-w-[350px] overflow-hidden  "
          >
            <motion.div
              style={{ opacity: contentOpacity }}
              className="px-2 py-6  h-full"
            >
              <p className="text- font-semibold  mb-2 text-[var(--navbar-highlight)] text-center">
                {title}
              </p>
              <div className="text-sm">{description}</div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
