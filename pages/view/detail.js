import Head from 'next/head'
import styles from '../../styles/style.module.css'
import React from 'react';
import { useRouter } from 'next/router'
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
  Center
} from "@chakra-ui/react";
import Profile from '../../components/profile'
import Historical from '../../components/historical';
import Layout from '../../components/layout';

export default function Detail(props) {
  const basicUrl = 'https://prod-qore-app.qorebase.io/vTS3B25NhFzZURO'
  const [data, setData] = React.useState({});
  const [info, setInfo] = React.useState('');
  const query = useQuery();

  React.useEffect(() => {
    if (!query) {
      return;
    }
    fetchData(query.id)
  }, [query]);

  function useQuery() {
    const router = useRouter();
    const hasQueryParams =
      /\[.+\]/.test(router.route) || /\?./.test(router.asPath);
    const ready = !hasQueryParams || Object.keys(router.query).length > 0;
    if (!ready) return null;
    return router.query;
  }
  
  function handleErrors(res) {
    if (!res) throw new Error(res.error);
    return res;
  }

  function fetchData (id) {
    fetch(`${basicUrl}/allAudiences/rows/${id}`, {
      method: "GET",
      headers: {
        'x-api-key': 'cd4e1ee0-e3fa-4973-b773-e2aee6dcc043'
      },
    })
    .then((res) => res.json())
    .then(handleErrors)
    .then((data) => {
      if (data) {
        setData(data) 
      }
    }) 
  }

  return (
    <div>
      <Head>
        <title>Pegadaian</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout className={styles.main}>
        <Center>
          <Grid>
            <Image
              src={data.picture}
              alt="image"
              fit='cover'
              boxSize='900px'
              height='450px'
            />
            <Grid backgroundColor='Highlight' padding='2'>
              <Container marginLeft='0'>
                <strong>{data.name}</strong>
                <Text>Kota : {data.city}</Text>
              </Container>
            </Grid>
            <Tabs isFitted variant='enclosed' maxWidth='900px'>
              <TabList paddingTop='4'>
                <Tab _selected={{ color: "white", bg: "#5AC421" }} fontSize='1xl' fontWeight='bold' marginLeft='4'>Detail</Tab>
                <Tab _selected={{ color: "white", bg: "#5AC421" }} fontSize='1xl' fontWeight='bold' marginRight='4'>Historical</Tab>
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
  )
}
