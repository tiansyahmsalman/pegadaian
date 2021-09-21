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
  const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID
  const apiKey = process.env.API_KEY
  const [data, setData] = React.useState({});
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
        'x-api-key': apiKey
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
      <Layout name={data.name} className={styles.main}>
        <Center>
          <Grid maxWidth='900px'>
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
            <Tabs isFitted variant='enclosed'>
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
