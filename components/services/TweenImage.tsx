import { FC, useRef } from "react";
import { Timeline, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { ImageForwardRef } from "./ImageForwardRef";
import styles from "./services.module.scss";

const images = [
  {
    src: "/assets/images/screen.svg",
    alt: "screen",
    className: styles.screen,
    width: 500,
    height: 500,
  },

  {
    src: "/assets/images/searchbar.svg",
    alt: "searchbar",
    className: styles.search,
    width: 150,
    height: 150,
  },
  {
    src: "/assets/images/banner.svg",
    alt: "banner",
    className: styles.banner,
    width: 400,
    height: 100,
  },
  {
    src: "/assets/images/block.svg",
    alt: "block",
    className: styles.block,
    width: 100,
    height: 100,
  },
  {
    src: "/assets/images/line-1.svg",
    alt: "line-1",
    className: styles["line-1"],
    width: 100,
    height: 15,
  },
  {
    src: "/assets/images/line-2.svg",
    alt: "line-2",
    className: styles["line-2"],
    width: 100,
    height: 15,
  },
  {
    src: "/assets/images/line-1.svg",
    alt: "line-3",
    className: styles["line-3"],
    width: 100,
    height: 15,
  },
];

export const TweenImages: FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={servicesRef} className={`${styles.container} services-animate`}>
      <Controller>
        <Scene duration={300} triggerElement={"#trigger"}>
          {(progress: number) => (
            <Timeline totalProgress={progress} paused stagger={1}>
              {images.map((image, index) => {
                return (
                  <Tween key={index} from={{ opacity: 0, x: 700 }} to={{ opacity: 1, x: 0 }}>
                    <ImageForwardRef {...image} ref={divRef} />
                  </Tween>
                );
              })}
            </Timeline>
          )}
        </Scene>
      </Controller>
    </div>
  );
};
