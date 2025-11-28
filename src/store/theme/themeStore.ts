import { create } from "zustand";

type Theme =
  | "no-theme"
  | "gryffindor-theme"
  | "slytherin-theme"
  | "ravenclaw-theme"
  | "hufflepuff-theme";

interface ThemeState {
  theme: Theme;
}

interface ThemeActions {
  setTheme: (theme: Theme) => void;
  loadTheme: () => void;
}

const THEME_CLASSES: Theme[] = [
  "gryffindor-theme",
  "slytherin-theme",
  "ravenclaw-theme",
  "hufflepuff-theme",
  "no-theme",
];

export const useThemeStore = create<ThemeState & ThemeActions>((set) => ({
  theme: "no-theme",

  setTheme: (theme) =>
    set(() => {
      // Remove old themes ONLY (safe)
      document.body.classList.remove(...THEME_CLASSES);

      // Add new theme
      document.body.classList.add(theme);

      // Save to localStorage
      localStorage.setItem("theme", theme);

      return { theme };
    }),

  loadTheme: () => {
    const saved = (localStorage.getItem("theme") as Theme) || "no-theme";

    // Remove old themes
    document.body.classList.remove(...THEME_CLASSES);

    // Apply saved one
    document.body.classList.add(saved);

    set({ theme: saved });
  },
}));
