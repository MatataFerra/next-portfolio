import { FC } from "react";
import NextLink from "next/link";
import Image from "next/image";

export const DarkLogo: FC = () => {
  return (
    <NextLink href='/'>
      <a>
        <Image width={80} height={20} src='/assets/images/Ferra-logo-dark.svg' alt='Logo Ferra' />
      </a>
    </NextLink>
  );
};
