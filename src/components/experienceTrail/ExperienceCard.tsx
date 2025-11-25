"use client";

import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import OffGem from "./images/off-gem.png";
import OnGem from "./images/on-gem.png";
import { useRef, useState, useEffect } from "react";

interface ExperienceCardProps {
  title: string;
  description: string;
  isLast: boolean;
}

const ExperienceCard = ({
  title,
  description,
  isLast,
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
    offset: ["center end", "center start"],
  });

  const [isAtCenter, setIsAtCenter] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // When latest > 0, the card center has crossed the viewport center
    setIsAtCenter(latest > 0);
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    [0, 0, 1]
  );

  return (
    <div className="flex items-start justify-between gap-20 py-10">
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
      {isLast ? (
        <div
          ref={cardRef}
          className="experience-card w-[350px] overflow-hidden h-6 flex items-center justify-center "
        >
          <div className="text-white">ComingSoon</div>
        </div>
      ) : (
        <motion.div
          ref={cardRef}
          initial={{ height: "40px" }}
          animate={{
            height: isAtCenter ? "400px" : "40px",
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="experience-card w-[350px] overflow-hidden  "
        >
          <motion.div style={{ opacity: contentOpacity }} className="p-6">
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-sm text-white/80">{description}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ExperienceCard;
