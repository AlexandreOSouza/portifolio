import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { PageContextProvider } from "../hooks/usePages";
import { FormContextProvider } from "../hooks/useForm";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageContextProvider>
      <FormContextProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </FormContextProvider>
    </PageContextProvider>
  );
}

export default MyApp;
