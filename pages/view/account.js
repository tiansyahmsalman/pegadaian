import { Stack, Text, Container, Button } from "@chakra-ui/react";
import Layout from "../../components/layout";
import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/style.module.css";
import { useNavbarContext } from "../../components/navbarContext";
import Skeleton from "../../components/skeletonProfile";

export default function Account() {
  const router = useRouter();
  const navbarContext = useNavbarContext();
  const user = navbarContext.user;

  function handleClick() {
    localStorage.removeItem("token");
    router.push("/view/login");
  }

  if (!user) {
    return (
      <Layout title="home" className={styles.main}>
        <Skeleton />
      </Layout>
    );
  }

  return (
    <Layout title="account" className={styles.main}>
      <Container maxWidth="850px">
        <Stack spacing="5" fontSize="1xl">
          <Container />
          <Container>
            <strong>Name</strong>
            <Text>{user.data.userNamaLengkap}</Text>
          </Container>
          <Container>
            <strong>Email</strong>
            <Text>{user.email}</Text>
          </Container>
          <Container>
            <strong>Lokasi</strong>
            <Text>{user.data.areaNm}</Text>
          </Container>
          <Stack p="4">
            <Button
              bgColor={"#5AC421"}
              color="white"
              datahover="none"
              onClick={handleClick}
            >
              Logout
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
}
