import { IconsProps } from "../interface";
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
  Javascript,
} from "@icons-pack/react-simple-icons";

export const INITIAL_BUTTONS_STATE = {
  1: true,
  2: false,
  3: false,
  4: false,
  5: false,
};

export const TEXT_HISTORY = `I was born in 1989 in Buenos Aires. Since 2012 I have been intersted in Design with Photoshop & Illustrator. I
studied at the University of Palermo. Later I worked as a frontend developer in a company
called CoreBiz. I'm currently working as a frontend developer in a company called
Steplix. Around 2018 I started to learn about React and I'm still learning. I'm also
learning about NextJS and TypeScript. In 2022 I'm started to develop my own projects,
like Inchequeable, a blog site about everything. I also whrite about my
experiences as a frontend developer, you can find them in my Linkedin profile. If you are
reading the longest version of this text, you are probably a recruiter or a hiring manager.
I'm looking for a job as a frontend developer or hire me for build your website.`;

export const PROJECTS_IMAGES_DESCRIPTION = [
  {
    src: "https://res.cloudinary.com/docq8rbdu/image/upload/v1662945824/portfolio-next/d6p32yuzvjsjdtx9tm6p.png",
    text: "Project build with *React*, Styled Components, *Redux* for the state management of the site, and MongoDB. This project is a clone of the popular SO Windows 11. It allows you to use apps like the ToDo app and Spotify.",
    title: "Windows 11 Clone",
    link: "https://matiasferraro.netlify.app/",
  },

  {
    src: "https://res.cloudinary.com/docq8rbdu/image/upload/v1662945824/portfolio-next/m4wz3uzqf1yb5e1vz3jv.png",
    text: "It is a blog site, to write articles. The user can read the articles and give likes. The application has a login system and a dashboard for the administrator. Admin can create, edit and delete articles. The admin can also see the users who like the articles. The app was built with *NextJS*, Context API for site state management, SASS modules, and MongoDB.",
    title: "Inchequeable Blog Site",
    link: "ttps://www.inchequeable.com.ar/",
  },

  {
    src: "https://res.cloudinary.com/docq8rbdu/image/upload/v1662945824/portfolio-next/betszv7uyswhforzu1iz.png",
    text: "E-Commerce site build with NextJS and *TypeScript*, it has Admin site with a dashboard. The app also has many features like: Store Locator with maps, Stock control, Cart, Checkout, PayPal payment, Favourites Products, and more.",
    title: "E-Commerce Site",
    link: "https://teslo.vercel.app/",
  },

  {
    src: "https://res.cloudinary.com/docq8rbdu/image/upload/v1663476239/portfolio-next/me0cm7c949lx5vlcgecj.png",
    text: "Classic game of Tic Tac Toe, build with React and TypeScript, use *Vite* as a bundler.",
    title: "Tic Tac Toe Game",
    link: "https://tateti-nine.vercel.app/",
  },

  {
    src: "https://res.cloudinary.com/docq8rbdu/image/upload/v1663476410/portfolio-next/pqfgrruk3z8lvkla0yaz.png",
    text: "Jira clone, build with NextJS, TypeScript, MongoDB and *NextUI* as a React UI Library. You can drag and drop tasks between columns, create new tasks, and delete tasks.",
    title: "Tic Tac Toe Game",
    link: "https://jira-ferra.vercel.app/",
  },

  {
    src: "https://res.cloudinary.com/docq8rbdu/image/upload/v1663476664/portfolio-next/q6zsyz8ytz7n00gyg8ox.png",
    text: "For practice I build the Pokedex only using *CSS*. Meanwhile I build the app with NextJS, NextUI and I use the PokeAPI to get the data of the Pokemons.",
    title: "Pokedex",
    link: "https://pokedex-v1-0.vercel.app/",
  },
];

export const ICONS: IconsProps = {
  next: { icon: Nextdotjs, color: "#000000" },
  react: { icon: ReactJs, color: "#61DAFB" },
  redux: { icon: Redux, color: "#764ABC" },
  sass: { icon: Sass, color: "#CC6699" },
  node: { icon: Nodedotjs, color: "#339933" },
  mongo: { icon: Mongodb, color: "#47A248" },
  typescript: { icon: Typescript, color: "#3178C6" },
  javascript: { icon: Javascript, color: "#F7E018" },
  express: { icon: Express, color: "#000000" },
  github: { icon: Github, color: "#000000" },
};

export const ARTICLES = [
  {
    title: "Automating styles in SASS",
    description:
      "If sometimes you feel that you are repeating yourself in your styles, this article is for you. 💪",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6975802903349350400/",
    icon: "sass",
  },
  {
    title: "How to implement a search function in React",
    description: "Step by Step on how to create a search bar in a React App 💪",
    link: "https://www.linkedin.com/pulse/implementar-un-buscador-en-reactjs-o-js-mat%25C3%25ADas-ferraro/?trackingId=sj8HTUvyS%2Bql4mc214S98Q%3D%3D",
    icon: "react",
  },

  {
    title: "Working with arrays in JS. Real life example. Unique values, mapping, reduce, and more",
    description: "Don't be afraid to work with arrays, even in complex contexts. 💪",
    link: "https://www.linkedin.com/pulse/agrupar-y-contar-arrays-en-javascript-mat%C3%ADas-ferraro/",
    icon: "javascript",
  },
];
