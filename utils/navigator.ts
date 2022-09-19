import { NextRouter, useRouter } from "next/router";

export const navigateTo = (url: string, router: NextRouter) => {
  router.push(url);
};

export const useNavigateTo = () => {
  const router = useRouter();
  return (url: string) => navigateTo(url, router);
};
