import Head from 'next/head'
import styles from '../styles/style.module.css'
import React from 'react';
import List from '../components/list'
import {
  Text,
  Grid,
  Center
} from "@chakra-ui/react";
import Layout from '../components/layout';

export default function Home() {
  const [data, setData] = React.useState([]);
  const [info, setInfo] = React.useState('');
  const basicUrl = 'https://prod-qore-app.qorebase.io/vTS3B25NhFzZURO'

  React.useEffect(() => {
    fetchDataAudiences()
  },[]);
  
  function handleErrors(res) {
    if (!res) throw new Error(res.error);
    return res;
  }

  function fetchDataAudiences () {
    fetch(`${basicUrl}/allAudiences/rows?limit=50&offset=0&$order=asc`, {
      method: "GET",
      headers: {
        'x-api-key': 'cd4e1ee0-e3fa-4973-b773-e2aee6dcc043'
      },
    })
    .then((res) => res.json())
    .then(handleErrors)
    .then((data) => {
      if (data.nodes) {
        setInfo(`${data.nodes[0].dedicatedSales.displayField} (${data.nodes[0].city}) ,`)
        setData(data.nodes) 
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
            {info ? (
              <Grid marginLeft='3' marginTop="3">
                <Text>Halo {info}</Text>
                <strong>Ini Target Customer untuk hari ini</strong>
              </Grid>
            ):<div />}
            {data.map((dt)=>{
              return <List key={dt.id} data={dt}/>
            })}
          </Grid>
        </Center>
      </Layout>
    </div>
  )
}
