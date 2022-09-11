import { FC } from "react";
import NextLink from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export const IconWithLink: FC<Props> = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <a target='_blank'>{children}</a>
    </NextLink>
  );
};
