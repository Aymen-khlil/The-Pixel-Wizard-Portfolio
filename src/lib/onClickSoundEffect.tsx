"use client";

import { useRef } from "react";
import { Howl } from "howler";

export default function useSound(url: string, volume = 1) {
  const soundRef = useRef(
    new Howl({
      src: [url],
      volume,
      preload: true,
    })
  );

  const play = () => {
    soundRef.current.play();
  };

  return play;
}
