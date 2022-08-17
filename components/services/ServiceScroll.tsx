import { FC, forwardRef, useRef, useEffect } from "react";
import { Tween, ScrollTrigger, Timeline } from "react-gsap";
import Image from "next/image";
import { ServiceText } from ".";
import gsap from "gsap";
import styles from "./services.module.scss";
import { Controller, Scene } from "react-scrollmagic";

export const ServiceScroll: FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const images = [
    {
      src: "/assets/images/screen.svg",
      alt: "illustration",
      width: 500,
      height: 500,
      className: "screen",
    },

    {
      src: "/assets/images/searchbar.svg",
      alt: "illustration",
      width: 150,
      height: 150,
      className: "search",
    },

    {
      src: "/assets/images/banner.svg",
      alt: "illustration",
      width: 400,
      height: 100,
      className: "banner",
    },
  ];

  return (
    <div className={`${styles.tween} services-animate`}>
      {/* <div className={styles.section} /> */}
      <Controller>
        {images.map((image, index) => (
          <div id={`trigger-${index}`} key={index} className={styles.trigger}>
            <Scene duration={400} triggerElement={`#trigger-${index}`}>
              {(progress: number) => (
                <>
                  <Tween
                    from={{ opacity: 0, x: -200 }}
                    to={{ opacity: 1, x: 550 }}
                    stagger={0.15}
                    totalProgress={progress}
                    paused>
                    <ImageSequence
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className={image.className}
                      ref={divRef}
                    />
                  </Tween>
                </>
              )}
            </Scene>
          </div>
        ))}
      </Controller>

      <div className={styles.section} />
    </div>
  );
};

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}

// eslint-disable-next-line react/display-name
const ImageSequence = forwardRef<HTMLDivElement, Props>(
  ({ src, alt, width, height, className }, ref) => {
    return (
      <div ref={ref} className={styles[className]}>
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
    );
  }
);
