import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Head from "next/head";
import { PageContextProvider } from "../hooks/usePages";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageContextProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </PageContextProvider>
  );
}

export default MyApp;
