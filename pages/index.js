import styles from '../styles/style.module.css'
import React from 'react';
import List from '../components/list'
import {
  Text,
  Grid,
  Center
} from "@chakra-ui/react";
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import axios from 'axios'
import auth from './services/auth'

export default function Home() {
  const [data, setData] = React.useState([]);
  const [info, setInfo] = React.useState('');
  const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID
  const apiKey = process.env.API_KEY
  const router = useRouter()

  React.useEffect(async () => {
    if(localStorage.getItem('token')){
      let user
      try {
        user = await auth()
        if (!user.data) {
          router.push('/view/login')
        } else {
          fetchDataAudiences()
        }
      } catch (error) {
        router.push('/view/login')
      }
    } else {
      router.push('/view/login')
    }
  },[]);

  function fetchDataAudiences () {
    const url = `${basicUrl}/allAudiences/rows?limit=50&offset=0&$order=asc`
    const headers = { 'x-api-key': apiKey }
    
    axios.get(url, { headers })
    .then(({data}) => {
      if (data.nodes) {
        setInfo(`${data.nodes[0].dedicatedSales.displayField} (${data.nodes[0].city}) ,`)
        setData(data.nodes) 
      }
    })
    .catch(error => {
      console.log(error)
    }) 
  }

  return (
    <div>
      <Layout title='home' className={styles.main}>
        <Center>
          <Grid>
            {info ? (
              <Grid m='3'>
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
