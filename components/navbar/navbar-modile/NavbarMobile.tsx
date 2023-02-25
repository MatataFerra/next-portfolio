import { useState } from "react";
import Drawer from "react-modern-drawer";
import Hamburger from "hamburger-react";
import { DarkLogo, LightLogo } from "../../logos";
import { useToggleTheme } from "../../../hooks";
import styles from "./navbarmobile.module.scss";
import { DarkModeIcon, LightModeIcon } from "../../navbar";
import "react-modern-drawer/dist/index.css";

export const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hamOpen, setHamOpen] = useState(false);
  const [changeTheme, setChangeTheme] = useState(false);
  const { theme, toggleTheme } = useToggleTheme();

  const onChangeTheme = () => {
    setChangeTheme((prev) => !prev);
    toggleTheme();
  };
  const toggleDrawer = () => {
    setHamOpen((prev) => !prev);
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {theme === "light" ? <LightLogo /> : <DarkLogo />}
        {changeTheme ? (
          <DarkModeIcon onClick={onChangeTheme} />
        ) : (
          <LightModeIcon onClick={onChangeTheme} />
        )}
      </div>
      <div className={styles.ham}>
        <Hamburger
          color={theme === "light" ? "#000" : "#fff"}
          onToggle={() => toggleDrawer()}
          toggled={hamOpen}
          hideOutline
          rounded
          size={24}
        />
      </div>
      <div className={styles.drawer}>
        <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
          <div>Hello World</div>
        </Drawer>
      </div>
    </div>
  );
};
