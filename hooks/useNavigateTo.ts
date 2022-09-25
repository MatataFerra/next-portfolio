import { useRouter } from "next/router";
import { navigateTo } from "../utils";

export const useNavigateTo = () => {
  const router = useRouter();
  return (url: string) => navigateTo(url, router);
};
