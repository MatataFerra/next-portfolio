import { FC, useMemo, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./projects.module.scss";
import NextLink from "next/link";

interface Props {
  imgSrc: string;
  text: string;
  alternate?: boolean;
  cssTextClass?: string;
  cssStrongTextClass?: string;
  linkToProject?: string;
}

export const ProjectCardScreen: FC<Props> = ({
  imgSrc,
  text,
  cssTextClass,
  cssStrongTextClass,
  alternate,
  linkToProject,
}) => {
  const boldText = useMemo(() => {
    const strongWords = text.match(/\*(.*?)\*/g);

    if (!strongWords) return text;

    const textArray = text.split(/\*(.*?)\*/g).map((text, index) => {
      const isStrong = strongWords.includes(`*${text}*`);
      if (isStrong) {
        return (
          <strong key={index} className={`${cssStrongTextClass ?? ""}`}>
            {text.trimStart()}
          </strong>
        );
      }

      return text;
    });

    return textArray;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <div className={styles["image-container"]}>
      <Image src={imgSrc} width={500} height={300} alt='Projects' className={styles.image} />
      <article
        className={`${alternate && styles["order-1"]} ${
          linkToProject && styles["text-container"]
        }`}>
        <p className={`${cssTextClass ?? ""}`}>{boldText}</p>
        {linkToProject && (
          <NextLink href={linkToProject} passHref>
            <a target='_blank' rel='noopener noreferrer' className={styles["project-link"]}>
              Visit Project
            </a>
          </NextLink>
        )}
      </article>
    </div>
  );
};
