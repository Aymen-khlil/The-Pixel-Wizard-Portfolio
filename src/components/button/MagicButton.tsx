"use client";

import useSound from "@/lib/onClickSoundEffect";
import "./button.css";

export default function MagicButton({ onClick }: { onClick: () => void }) {
  const playSound = useSound("/audio/onClickAudio.wav");
  return (
    <div className="flex flex-col items-center justify-center ">
      {/* <Image src="/aaa.png" width={200} height={100} alt="wizzardCap" /> */}
      <button
        className="pixel-btn text-xl  "
        onClick={() => {
          playSound();
          onClick();
        }}
      >
        Start Quest
      </button>
    </div>
  );
}
