"use client";

import OwleryInput from "@/components/inputs/OwleryInput";
import "./theOwlery.css";
import OwleryTextArea from "@/components/inputs/OwleryTextArea";
import OwleryBtn from "@/components/button/OwleryBtn";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useWeb3Forms from "@web3forms/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, formSchema } from "@/validations/ContactValidation";
import StoryContainer from "@/components/sorting-hat-storytelling/StoryContainer";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

const SendAnOwl = () => {
  const [displayMessage, setDisplayMessage] = useState(false);
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormValues>({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(formSchema),
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY!;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "The Pixel Wizard Portfolio",
      subject: "New Contact Message from Portfolio",
    },
    onSuccess: () => {
      setIsSuccess(true);
      reset();
    },
    onError: () => {
      setIsFailure(true);
    },
  });

  const whichMessage = () => {
    if (isSubmitSuccessful && isSuccess) {
      setDisplayMessage(true);
      return "Delivered! Even the Ministry couldn't stop that owl.";
    }

    if (isSubmitSuccessful && isFailure) {
      setDisplayMessage(true);
      return "The Ministry's servers are acting up. Attempt another send, or contact me directly via email Aymen-khlil@outlook.com.";
    }

    if (errors.name && errors.email && errors.message) {
      setDisplayMessage(true);
      return "By Merlin’s beard! Everything is empty! Start again before I sort you into detention.";
    }

    if (errors.name) {
      setDisplayMessage(true);
      return errors.name.message;
    }
    if (errors.email) {
      setDisplayMessage(true);
      return errors.email.message;
    }
    if (errors.message) {
      setDisplayMessage(true);
      return errors.message.message;
    }

    return null;
  };

  const message = whichMessage();

  return (
    <div className="theOwlery-content flex flex-col  h-screen">
      <Image
        src="/backgrounds/theOwleryBackground.png"
        alt="Owlery background"
        fill
        priority
        className="object-cover -z-10"
        quality={90}
      />
      <div className="lg:px-40  flex items-center">
        <Navbar />
      </div>
      <div className=" flex-1 flex flex-col items-center justify-center  gap-2">
        <motion.form
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full md:w-[65%] md:h-[80%] lg:w-[40%] 2xl:w-[35%] h-full lg:h-[80%] relative "
        >
          <div className="theOwlery-scroll h-full w-full flex flex-col  items-start  space-y-14 ">
            <h1 className="text-center  w-full text-3xl text-[#7E280C]">
              Send an Owl
            </h1>
            <div className=" flex-1 flex flex-col gap-5 w-full items-start justify-start ">
              <div className="w-full  flex items-center justify-center">
                <OwleryInput
                  className="w-[70%]"
                  placeholder="Enter your owl name."
                  type="text"
                  {...register("name")}
                />
              </div>

              <div className="w-full  flex items-center justify-center">
                <OwleryInput
                  className="w-[70%]"
                  placeholder="Enter your owl email."
                  type="email"
                  {...register("email")}
                />
              </div>

              <div className="w-full  flex items-center justify-center">
                <OwleryTextArea
                  placeholder="Enter your owl message."
                  className="w-[70%]"
                  {...register("message")}
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-[43%]  ">
            <OwleryBtn>
              {isSubmitting ? (
                <svg
                  className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "SEND"
              )}
            </OwleryBtn>
          </div>
          <div className="w-full  flex items-center justify-between">
            <div>
              <p className="text-[10px] text-white">Aymen-khlil@outlook.com</p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/mohamed-aymen-khlil-467840179/"
                target="_blank"
                title="Visit LinkedIn"
              >
                <motion.div
                  whileHover={{
                    x: [-2, 2, -2],
                    scale: 1.1,
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    },
                  }}
                  className="linkedin"
                ></motion.div>
              </a>
              <a
                href="https://github.com/Aymen-khlil"
                target="_blank"
                title="Visit Github"
              >
                <motion.div
                  whileHover={{
                    x: [-2, 2, -2],
                    scale: 1.1,
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    },
                  }}
                  className="github"
                ></motion.div>
              </a>
            </div>
          </div>
        </motion.form>
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
            className="absolute bottom-10 flex items-center justify-center pb-4 lg:pb-0  left-0  w-full  h-36 lg:h-28 md:w-[60%] lg:w-[50%]"
          >
            <div className=" h-full w-[90%] sm:w-[80%]">
              <StoryContainer
                key={message}
                hatMessage={message as string}
                onCloseAction={() => {
                  setIsSuccess(false);
                  setIsFailure(false);
                  setIsSuccess(false);
                  setDisplayMessage(false);
                }}
                displayBtn={false}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SendAnOwl;
