import { createContext, FC, useContext, useEffect, useState } from "react";
import { Children } from "../interface";

type Theme = "light" | "dark";
interface ContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const setProperty = (property: string, value: string) => {
    document.documentElement.style.setProperty(property, value);
  };

  useEffect(() => {
    switch (theme) {
      case "light": {
        setProperty("--background-color", "#efefef");
        setProperty("--background-color-panel", "#fff");
        setProperty("--font-color", "#222222");
        break;
      }
      case "dark": {
        setProperty("--background-color", "#222222");
        setProperty("--background-color-panel", "#161616");
        setProperty("--font-color", "#efefef");
        break;
      }
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return { theme, toggleTheme };
};

const themeContext = createContext({} as ContextProps);

export const ThemeProvider: FC<Children> = (props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>{props.children}</themeContext.Provider>
  );
};

export const useToggleTheme = () => useContext(themeContext);
