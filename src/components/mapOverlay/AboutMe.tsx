/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useState, useEffect } from "react";
import "./aboutMe.css";
import AboutMeContent from "./AboutMeContent";

export default function AboutMe() {
  const ANIMATION = {
    welcomeFadeIn: 400,
    welcomeFadeOut: 1000,
    welcomeVisible: 1500,
    maskFadeIn: 0,
    maskVisible: 6000,
  };

  const welcomeTotal =
    ANIMATION.welcomeFadeIn +
    ANIMATION.welcomeVisible +
    ANIMATION.welcomeFadeOut;

  const maskStart = welcomeTotal; // when mask should appear
  const maskEnd = maskStart + ANIMATION.maskFadeIn + ANIMATION.maskVisible;

  const [showWelcome, setShowWelcome] = useState(false);
  const [showMask, setShowMask] = useState(false);
  const [revealPage, setRevealPage] = useState(false);

  useEffect(() => {
    setShowWelcome(true);
  }, []);

  // Welcome disappears
  useEffect(() => {
    const t = setTimeout(() => setShowWelcome(false), welcomeTotal);
    return () => clearTimeout(t);
  }, []);

  // Mask starts
  useEffect(() => {
    const t = setTimeout(() => setShowMask(true), maskStart);
    return () => clearTimeout(t);
  }, [maskStart]);

  // Page reveal
  useEffect(() => {
    const t = setTimeout(() => setRevealPage(true), maskEnd);
    return () => clearTimeout(t);
  }, [maskEnd]);

  const sentence = "I solemnly swear that I am up to no good".split(" ");

  const wordVariant = {
    hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.35, easeInOut },
    },
    exit: {
      opacity: 0,
      filter: "blur(10px)",
      transition: { duration: 0.35, easeInOut },
    },
  };

  const containerVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // delay between each word
      },
    },
    exit: {
      opacity: 1,
      // transition: {
      //   staggerChildren: 0.12,
      //   staggerDirection: 1,
      // },
    },
  };

  return (
    <div className="relative h-screen ">
      <AnimatePresence mode="wait">
        {/* WELCOME */}
        {showWelcome && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: ANIMATION.welcomeFadeIn / 1000 }}
            className="h-full  flex items-center justify-center "
          >
            <motion.div
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="welcome-message text-white text-3xl flex gap-4 items-center justify-center"
            >
              {sentence.map((word, i) => (
                <motion.p key={i} variants={wordVariant} className=" ">
                  {word}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* MASK */}
        {showMask && !revealPage && (
          <motion.div
            key="mask"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: ANIMATION.maskFadeIn / 1000 }}
            className="content-mask h-full  "
          ></motion.div>
        )}

        {/* REVEALED PAGE */}
        {revealPage && (
          <motion.div
            key="page3"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="final-content h-full"
          >
            <AboutMeContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
