import { NextRouter } from "next/router";

export const navigateTo = (url: string, router: NextRouter) => {
  router.push(url);
};
