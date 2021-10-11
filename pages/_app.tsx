import "../styles/globals.css";
import { Divider } from "@chakra-ui/layout";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
});

const theme = extendTheme({ breakpoints });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Divider />
      <Footer />
    </ChakraProvider>
  );
}
export default MyApp;
