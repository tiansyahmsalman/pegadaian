import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { NavbarContextProvider } from "../components/navbarContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavbarContextProvider>
        <Component {...pageProps} />
      </NavbarContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
