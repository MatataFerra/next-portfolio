import { Nextdotjs } from "@icons-pack/react-simple-icons";

export interface IconsProps {
  [key: string]: Icon;
}

export interface Icon {
  icon: typeof Nextdotjs;
  color: string;
  dark?: string;
}
