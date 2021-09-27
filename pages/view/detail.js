import styles from "../../styles/style.module.css";
import React from "react";
import { useRouter } from "next/router";
import {
  Container,
  Image,
  Text,
  Grid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import Profile from "../../components/profile";
import Historical from "../../components/historical";
import Layout from "../../components/layout";
import { useNavbarContext } from "../../components/navbarContext";
import Skeleton from "../../components/skeletonDetail";

export default function Detail() {
  const [data, setData] = React.useState({});
  const query = useQuery();
  const router = useRouter();
  const navbarContext = useNavbarContext();

  React.useEffect(async () => {
    if (!query) {
      return;
    }

    const user = await navbarContext.auth();
    if (!user.data) {
      router.push("/view/login");
    } else {
      fetchData(query.id);
    }
  }, [query]);

  function useQuery() {
    const router = useRouter();
    const hasQueryParams =
      /\[.+\]/.test(router.route) || /\?./.test(router.asPath);
    const ready = !hasQueryParams || Object.keys(router.query).length > 0;
    if (!ready) return null;
    return router.query;
  }

  async function fetchData(id) {
    const audience = await navbarContext.getAudience(id);
    if (audience.data) {
      setData(audience.data);
    } else {
    }
  }

  if (!data.encNama) {
    return (
      <Layout title="home" className={styles.main}>
        <Skeleton />
      </Layout>
    );
  }

  return (
    <div>
      <Layout
        title="detail"
        name={data.encNama}
        className={styles.main}
        position="fixed"
      >
        <Center>
          <Grid width={"850px"}>
            {/* <Image
              src={data.picture}
              alt='image'
              fit='cover'
              boxSize='900px'
              height='450px'
            /> */}
            <Grid as="div" backgroundColor="whiteAlpha.700" py="2">
              <Container marginLeft="0">
                <strong>{data.encNama}</strong>
                <Text>Kota : {data.kabupatenKota}</Text>
              </Container>
            </Grid>
            <Tabs isFitted variant="enclosed">
              <TabList paddingTop="4">
                <Tab
                  _selected={{ color: "white", bg: "#5AC421" }}
                  fontSize="1xl"
                  fontWeight="bold"
                  marginLeft="4"
                >
                  Detail
                </Tab>
                <Tab
                  _selected={{ color: "white", bg: "#5AC421" }}
                  fontSize="1xl"
                  fontWeight="bold"
                  marginRight="4"
                >
                  Historical
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Profile data={data} />
                </TabPanel>
                <TabPanel>
                  <Historical data={data} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Grid>
        </Center>
      </Layout>
    </div>
  );
}
