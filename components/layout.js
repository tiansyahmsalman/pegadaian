import Head from "next/head";
import NavbarHome from "./navbarHome";
import NavbarDetail from "./navbarDetail";
import Footer from "./footer";
import SideNavbar from "./sideNavbar";
import { Box, Flex } from "@chakra-ui/react";
import NavbarAccount from "./navbarAccount"

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Pegadaian</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w="full" h="full">
        <SideNavbar display={{ base: "none", md: "block" }} />
        <Box w="full" pl={{ base: "0.5", md: "64" }}>
          {props.title === "home" ? <NavbarHome /> : <></>}
          {props.title === "detail" ? (
            <NavbarDetail name={props.name} />
          ) : (
            <></>
          )}
          {props.title === "account" ? <NavbarAccount /> : <></>}
          <main>{props.children}</main>
          <Footer display={{ base: "inline-flex", md: "none" }} pos="fixed" />
        </Box>
      </Flex>
    </>
  );
}
