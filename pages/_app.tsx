import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps}>
      <ChakraProvider />
    </Component>
  );
}
export default MyApp;
