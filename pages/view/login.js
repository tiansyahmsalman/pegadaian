import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    Center
  } from '@chakra-ui/react'
  import React from 'react'
  import { useRouter } from 'next/router'
  import { useNavbarContext } from '../../components/navbarContext'
  
  export default function Login() {
    const [email, setEmail] = React.useState('')
    const [password , setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const router = useRouter()
    const navbarContext = useNavbarContext()

    React.useEffect( async () => {
      if (localStorage.getItem("token")) {
        const user = await navbarContext.auth();
        if (user.data) {
          router.push('/')
        }
      }
    },[])

    async function login () {
      let user = await navbarContext.login(email, password)
      if (user.data) {
        localStorage.setItem('token', user.data.token)
        router.push('/')
      } else {
        setError(user.error)
      }
    }
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={'green.50'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={10}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Login</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Login to continue your action.
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={'white'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id='email'>
                <Center color='red'>
                  {error}
                </Center>
              </FormControl>
              <FormControl id='email'>
                <FormLabel>Email</FormLabel>
                <Input type='email' value={email} onChange={e => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id='password'>
                <FormLabel>Password</FormLabel>
                <Input type='password' value={password} onChange={e => setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  backgroundColor={'#5AC421'}
                  color={'white'}
                  _hover={{
                    bg: '#6cb740',
                  }}
                  onClick={login}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    )
  }