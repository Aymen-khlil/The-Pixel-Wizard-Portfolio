/* eslint-disable react-hooks/set-state-in-effect */
// components/TransitionOverlay.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import TextType from "../TextType";

interface TransitionOverlayProps {
  isActive: boolean;
  imageSrc?: string;
  text?: string;
  bgColor?: string;
  duration?: number; // total fade duration
  displayTime?: number; // how long the image/text stay before fade out
  onComplete?: () => void;
}

export default function TransitionOverlay({
  isActive,
  imageSrc,
  text,
  bgColor = "#000000",
  duration = 500,
  displayTime = 2000,
  onComplete,
}: TransitionOverlayProps) {
  const [visible, setVisible] = useState(isActive);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    if (isActive) {
      setVisible(true);
      setShouldFadeOut(false);

      // Start fade-out animation
      const fadeOutTimer = setTimeout(() => {
        setShouldFadeOut(true);
      }, duration + displayTime);

      const hideOutTimer = setTimeout(() => {
        setShouldHide(true);
      }, displayTime);

      // Navigate and cleanup after fade-out completes
      const completeTimer = setTimeout(() => {
        onComplete?.();
        setTimeout(() => {
          setVisible(false);
        }, 100);
      }, duration + displayTime * 1.2);

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(hideOutTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isActive, duration, displayTime, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: shouldFadeOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration / 1000 }}
          style={{ backgroundColor: bgColor }}
        >
          {text && (
            <motion.div
              className=""
              initial={{ opacity: 0 }}
              animate={{ opacity: shouldHide ? 0 : 1 }}
              transition={{
                delay: shouldHide ? 0 : 1,
                duration: duration / 1000,
              }}
              exit={{ opacity: 0 }}
            >
              <TextType
                text={text}
                typingSpeed={50}
                pauseDuration={1000}
                initialDelay={1000}
                showCursor={false}
                className="text-white text-lg animate-typing "
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
