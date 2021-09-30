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
    const user = await navbarContext.auth()
    if (!user.data) {
      router.push('/view/login')
    } else {
      fetchDataAudiences()
    }
  },[])

  async function fetchDataAudiences () {
    const audiences = await navbarContext.getAudiences()
    if (audiences.data) {
      setData(audiences.data.nodes)
    } else {}
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
              <strong>Ini Target Customer untuk hari ini</strong>
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
