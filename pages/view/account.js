import {
    Stack,
    Text,
    Container,
    Button
  } from '@chakra-ui/react'
  import Layout from '../../components/layout'
  import React from 'react'
  import auth from '../services/auth'
  import { useRouter } from 'next/router'
  import styles from '../../styles/style.module.css'
  
  export default function Account() {
    const [user, setUser] = React.useState([])
    const router = useRouter()

    React.useEffect( async ()=>{
      try {
        const user = await auth()
        if (user.data) {
          setUser(user.data.data)
        } else {
          console.log(user)
        }
      } catch (error) {
        console.log(error.message)
      }
    },[])

    function handleClick () {
      localStorage.removeItem('token')
      router.push('/view/login')
    }

    return (
      <Layout title='account' className={styles.main}>
        <Container maxWidth='850px'>
          <Stack spacing='5' fontSize='1xl'>
            <Container />
            <Container>
              <strong>Name</strong>
              <Text>{user.name}</Text>
            </Container>
            <Container>
              <strong>Email</strong>
              <Text>{user.email}</Text>
            </Container>
            <Container>
              <strong>Lokasi</strong>
              <Text>{user.location}</Text>
            </Container>
            <Stack p='4'>
              <Button bgColor={'#5AC421'} color='white' datahover='none' onClick={handleClick} >Logout</Button>
            </Stack>
          </Stack>
        </Container>
      </Layout>
    )
  }