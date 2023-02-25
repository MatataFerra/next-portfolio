import {
  Nextdotjs,
  ReactJs,
  Redux,
  Sass,
  Nodedotjs,
  Mongodb,
  Typescript,
  Express,
  Github,
} from "@icons-pack/react-simple-icons";

export interface IconsProps {
  [key: string]: {
    icon:
      | typeof Nextdotjs
      | typeof ReactJs
      | typeof Redux
      | typeof Sass
      | typeof Nodedotjs
      | typeof Mongodb
      | typeof Typescript
      | typeof Express
      | typeof Github;
    color: string;
  };
}
