import styles from '../styles/style.module.css'
import React from 'react'
import List from '../components/list'
import {
  Text,
  Grid
} from '@chakra-ui/react'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import { useNavbarContext } from '../components/navbarContext'
import Skeleton from '../components/skeletonList'

export default function Home() {
  const [data, setData] = React.useState(undefined)
  const router = useRouter()
  const navbarContext = useNavbarContext()
  const info = navbarContext.user
  React.useEffect(async () => {
    if (localStorage.getItem("token")) {
      const user = await navbarContext.auth()
      if (!user.data) {
        router.push('/view/login')
      } else {
        fetchDataAudiences()
      }
    } else {
      router.push('/view/login')
    }
  },[])

  async function fetchDataAudiences () {
    const audiences = await navbarContext.getAudiences()
    if (audiences.data) {
      setData(audiences.data.nodes)
    } else {
      throw new Error("Frontend Error fetchDataAudiences");
    }
  }

  if (!data) {
    return (
      <Layout title='home' className={styles.main}>
        <Skeleton />
      </Layout>
    )
  }

  return (
    <div>
      <Layout title='home' className={styles.main}>
        <Grid m={{base:'0', md:'5'}}>
          {info ? (
            <Grid m='3'>
              <Text>Halo {info.data.userNamaLengkap}</Text>
              {data.length > 0 ? 
                <strong>Berikut 10 rekomendasi nasabah untuk hari ini</strong> 
                : 
                <strong>Data belum terupdate</strong>
              }
            </Grid>
          ):<div />}
          {data.map((dt)=>{
            return <List key={dt.id} data={dt} />
          })}
        </Grid>
      </Layout>
    </div>
  )
}
