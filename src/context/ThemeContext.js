import { createContext, useContext, useEffect, useState, useSyncExternalStore } from "react";

const ThemeContext = createContext();
const STORAGE_KEY = "gj-theme";
const THEME_COLORS = { dark: "#08080f", light: "#f7f5f2" };
const subscribe = () => () => {};
const getServerTheme = () => "dark";

function getInitialTheme() {
  if (typeof document === "undefined") return "dark";
  // The no-flash inline script in index.html already stamps this attribute
  // before React mounts, so we just read it back here.
  const stamped = document.documentElement.getAttribute("data-theme");
  if (stamped === "light" || stamped === "dark") return stamped;
  return "dark";
}

export function ThemeProvider({ children }) {
  const initialTheme = useSyncExternalStore(subscribe, getInitialTheme, getServerTheme);
  const [chosenTheme, setTheme] = useState(null);
  const theme = chosenTheme ?? initialTheme;

  useEffect(() => {
    // Preserve the no-flash theme until the browser preference is restored.
    const appliedTheme = chosenTheme === null ? getInitialTheme() : theme;
    document.documentElement.setAttribute("data-theme", appliedTheme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_COLORS[appliedTheme]);
    try {
      window.localStorage.setItem(STORAGE_KEY, appliedTheme);
    } catch {
      // ignore write failures (private browsing, storage disabled, etc.)
    }
  }, [theme, chosenTheme]);

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
