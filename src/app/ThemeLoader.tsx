"use client";

import { useThemeStore } from "@/store/theme/themeStore";
import { useEffect, useRef } from "react";

const ThemeLoader = ({ children }: { children: React.ReactNode }) => {
  const { loadTheme } = useThemeStore();
  useEffect(() => {
    loadTheme();
  }, [loadTheme]);
  const soundtrackRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundtrackRef.current = new Howl({
      src: ["/audio/hedwigTheme.mp3"],
      loop: true,
      volume: 0,
      mute: true,
    });

    soundtrackRef.current.play();

    const handleInteraction = () => {
      if (soundtrackRef.current) {
        soundtrackRef.current.mute(false);
        soundtrackRef.current.fade(0, 0.5, 1000);
      }

      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("mousemove", handleInteraction);
      document.removeEventListener("keypress", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("mousemove", handleInteraction);
    document.addEventListener("keypress", handleInteraction);
    document.addEventListener("scroll", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("mousemove", handleInteraction);
      document.removeEventListener("keypress", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);

      if (soundtrackRef.current) {
        soundtrackRef.current.stop();
        soundtrackRef.current.unload();
      }
    };
  }, []);
  return <>{children}</>;
};

export default ThemeLoader;
