"use client";

import Navbar from "@/components/navbar/Navbar";
import "./spellbook.css";
import SpellContainer from "@/components/spellbook/SpellContainer";
import SpellHolder from "@/components/spellbook/SpellHolder";
import SpellHolderLeft from "@/components/spellbook/SpellHolderLeft";
import SpellHolderRight from "@/components/spellbook/SpellHolderRight";
import { motion } from "framer-motion";
import ActionButton from "@/components/button/ActionButton";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Spellbook = () => {
  const router = useRouter();
  const frontendSpells = [
    "React",
    "Vite",
    "Next.js",
    "TypeScript",
    "Zustand",
    "Tailwind CSS",
    "Material UI",
    "Shadcn",
    "Flowbite",
    "Formik",
    "Yup",
    "Recharts",
    "ChartsJS",
    "Ant Design",
  ];

  const backendSpells = [
    "NodeTS",
    "Express",
    "NestJS",
    "MongoDB",
    "REST APIs",
    "Server-Sent Events (SSE)",
    "Active Campaign",
    "Google Ads",
    "Serper",
  ];

  const toolSpells = [
    "Git",
    "Jira",
    "Docker",
    "Jenkins",
    "SonarQube",
    "Zeplin",
    "Postman",
    "Figma",
    "VS Code",
  ];

  return (
    <div className="spellbook-content flex flex-col h-screen overflow-y-auto">
      <Image
        src="/backgrounds/spellbook-Background.webp"
        alt="Spellbook background"
        fill
        priority
        className="object-cover -z-10"
        quality={90}
      />
      <div className="lg:px-40">
        <Navbar />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-12 ">
        <div className="w-full max-w-7xl flex gap-6 items-stretch justify-center flex-wrap ">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SpellHolderLeft title="Frontend Enchantments">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.12,
                    },
                  },
                }}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {frontendSpells.map((spell, i) => (
                  <motion.div
                    key={spell + i}
                    variants={{
                      hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <SpellContainer spell={spell} />
                  </motion.div>
                ))}
              </motion.div>
            </SpellHolderLeft>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SpellHolder title="Backend Sorcery">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.12,
                    },
                  },
                }}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {backendSpells.map((spell, i) => (
                  <motion.div
                    key={spell + i}
                    variants={{
                      hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <SpellContainer spell={spell} />
                  </motion.div>
                ))}
              </motion.div>
            </SpellHolder>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SpellHolderRight title="Magical Tools">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.12,
                    },
                  },
                }}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {toolSpells.map((spell, i) => (
                  <motion.div
                    key={spell + i}
                    variants={{
                      hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <SpellContainer spell={spell} />
                  </motion.div>
                ))}
              </motion.div>
            </SpellHolderRight>
          </motion.div>
        </div>
        <div className="pt-3">
          <ActionButton
            onClick={() => {
              router.push("/the-pensieve-archives");
            }}
          >
            Continue
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default Spellbook;
