import styles from '../styles/style.module.css'
import React from 'react'
import List from '../components/list'
import {
  Text,
  Grid,
  Center
} from '@chakra-ui/react'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import auth from './services/auth'
import serviceDataAudiences from './services/getAudiences'

export default function Home() {
  const [data, setData] = React.useState([])
  const [info, setInfo] = React.useState('')
  const router = useRouter()

  React.useEffect(async () => {
    const user = await auth()
    if (!user.data) {
      router.push('/view/login')
    } else {
      fetchDataAudiences()
    }
  },[])

  async function fetchDataAudiences () {
    const audiences = await serviceDataAudiences()
    if (audiences.data) {
      setInfo(`${audiences.data.nodes[0].dedicatedSales.displayField} (${audiences.data.nodes[0].city}) ,`)
      setData(audiences.data.nodes)
    } else {}
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
              return <List key={dt.id} data={dt} />
            })}
          </Grid>
        </Center>
      </Layout>
    </div>
  )
}
