import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Head from "next/head";

import Fonts from "../component/Font";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
});

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "monospace",
  },
  breakpoints,
});

function MyApp({ Component, pageProps }: AppProps) {
  const description = "keychiのポートフォリオ";
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Keychi&apos;s Lounge</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
      </Head>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
