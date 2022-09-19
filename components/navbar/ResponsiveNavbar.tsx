import { FC } from "react";
import { useDevice } from "../../hooks";
import { Navbar, NavbarMobile } from ".";

export const ResponsiveNavbar: FC = () => {
  const device = useDevice();
  return <>{device === "mobile" ? <NavbarMobile /> : <Navbar />}</>;
};
