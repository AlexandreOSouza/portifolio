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
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/firacode@6.2.0/distr/fira_code.css"
          />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </PageContextProvider>
  );
}

export default MyApp;
