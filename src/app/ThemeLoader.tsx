"use client";

import { useThemeStore } from "@/store/theme/themeStore";
import { useEffect } from "react";

const ThemeLoader = ({ children }: { children: React.ReactNode }) => {
  const { loadTheme } = useThemeStore();
  useEffect(() => {
    loadTheme();
  }, [loadTheme]);
  return <>{children}</>;
};

export default ThemeLoader;
