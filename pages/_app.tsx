import "../styles/globals.css";
import { Divider } from "@chakra-ui/layout";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Head from "next/head";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
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
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Keychi&apos;s Lounge</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Fonts />
      <Navbar className="site-header" />
      <Component {...pageProps} />
      <Divider />
      <Footer className="site-footer" />
    </ChakraProvider>
  );
}
export default MyApp;
