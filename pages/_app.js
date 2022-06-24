import * as React from "react";
import * as Chakra from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <Chakra.ChakraProvider>
      <Component {...pageProps} />
    </Chakra.ChakraProvider>
  );
}
