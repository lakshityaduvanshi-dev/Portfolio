import { createContext, useContext, useEffect, useState } from "react";

/**
 * Central store for the two independent visual axes of the site:
 *  - `theme`   : "dark" | "light"
 *  - `accent`  : "violet" | "emerald" | "blue"
 *
 * Both are written to <html data-theme> / <html data-accent>, which is all
 * index.css needs to repaint the whole UI — no per-component prop drilling.
 */
const ThemeContext = createContext(null);

export const ACCENTS = [
  { id: "violet", label: "Violet", swatch: "#8b5cf6" },
  { id: "emerald", label: "Emerald", swatch: "#10b981" },
  { id: "blue", label: "Electric Blue", swatch: "#2f8fff" },
];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("ly-theme") || "dark";
  });
  const [accent, setAccent] = useState(() => {
    if (typeof window === "undefined") return "violet";
    return localStorage.getItem("ly-accent") || "violet";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ly-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-accent", accent);
    localStorage.setItem("ly-accent", accent);
  }, [accent]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accent, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
