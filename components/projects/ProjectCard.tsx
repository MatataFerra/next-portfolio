import Image from "next/image";
import NextLink from "next/link";
import { FC, useMemo, useRef } from "react";
import { gsap } from "gsap";
import styles from "./projects.module.scss";

interface Props {
  imgSrc: string;
  href: string;
  title: string;
}

export const ProjectCard: FC<Props> = ({ imgSrc, href, title }) => {
  const imgRef = useRef<HTMLDivElement>(null);
  const phraseLink = useRef("Visit This Website");
  const parsePhrase = useMemo(() => phraseLink.current.split(""), []);

  const q = gsap.utils.selector(imgRef);
  const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

  const onMouseEnter = () => {
    tl.to(q(".goto"), { fontSize: "18px", duration: 0.01, stagger: 0.01 });
  };

  const onMouseLeave = () => {
    tl.to(q(".goto"), { fontSize: "0px", duration: 0.01, stagger: 0.01 });
  };
  return (
    <div className={styles.card}>
      <h3 className={styles.h3}>{title}</h3>
      <Image src={imgSrc} alt='Project' layout='fill' priority />
      <NextLink href={href} passHref>
        <a
          target='_blank'
          rel='noopener noreferrer'
          className={styles.cardLinks}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          <div className={styles.cardLinkContainer} ref={imgRef}>
            <Image
              src='/assets/images/projects/link-goto.svg'
              alt='Go To Web'
              width={25}
              height={25}
              className={styles.image}
            />

            {parsePhrase.map((char, index) => {
              const spaceL = index === 0 ? styles.gotoSpaceL : "";
              const spaceR = char.trim().length === 0 ? styles.gotoSpace : "";

              return (
                <span className={`goto ${styles.goto} ${spaceL} ${spaceR}`} key={index}>
                  {char}
                </span>
              );
            })}
          </div>
        </a>
      </NextLink>
    </div>
  );
};
