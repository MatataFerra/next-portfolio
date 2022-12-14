import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../hooks/useTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
