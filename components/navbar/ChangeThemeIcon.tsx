import { FC } from "react";
import { DarkModeIcon, LightModeIcon } from ".";
import { useToggleTheme } from "../../hooks";

export const ChangeThemeIcon: FC = () => {
  const { theme, toggleTheme } = useToggleTheme();
  return (
    <>
      {theme === "dark" ? (
        <DarkModeIcon onClick={() => toggleTheme()} />
      ) : (
        <LightModeIcon onClick={() => toggleTheme()} />
      )}
    </>
  );
};
