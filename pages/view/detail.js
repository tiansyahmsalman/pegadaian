import styles from '../../styles/style.module.css'
import React from 'react'
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
} from '@chakra-ui/react'
import Profile from '../../components/profile'
import Historical from '../../components/historical'
import Layout from '../../components/layout'
import axios from 'axios'
import auth from '../services/auth'

export default function Detail(props) {
  const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID
  const apiKey = process.env.API_KEY
  const [data, setData] = React.useState({})
  const query = useQuery()
  const router = useRouter()

  React.useEffect(async () => {
    if (!query) {
      return
    }

    if(localStorage.getItem('token')){
      let user
      try {
        user = await auth()
        if (!user.data) {
          router.push('/view/login')
        } else {
          fetchData(query.id)
        }
      } catch (error) {
        router.push('/view/login')
      }
    } else {
      router.push('/view/login')
    }
  },[])

  function useQuery() {
    const router = useRouter()
    const hasQueryParams =
      /\[.+\]/.test(router.route) || /\?./.test(router.asPath)
    const ready = !hasQueryParams || Object.keys(router.query).length > 0
    if (!ready) return null
    return router.query
  }

  function fetchData (id) {
    const url = `${basicUrl}/allAudiences/rows/${id}`
    const headers = { 'x-api-key': apiKey }
    
    axios.get(url, { headers })
    .then(({data}) => {
      if (data) {
        setData(data) 
      }
    })
    .catch(error => {
      console.log(error)
    }) 
  }

  return (
    <div>
      <Layout title='detail' name={data.name} className={styles.main}>
        <Center>
          <Grid maxWidth='850px'>
            <Image
              src={data.picture}
              alt='image'
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
                <Tab _selected={{ color: 'white', bg: '#5AC421' }} fontSize='1xl' fontWeight='bold' marginLeft='4'>Detail</Tab>
                <Tab _selected={{ color: 'white', bg: '#5AC421' }} fontSize='1xl' fontWeight='bold' marginRight='4'>Historical</Tab>
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
