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
  } from '@chakra-ui/react';
  import React from 'react';
  import { useRouter } from 'next/router'
  import axios from 'axios'
  
  export default function Login() {
    const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID
    const apiKey = process.env.API_KEY
    const [email, setEmail] = React.useState('');
    const [password , setPassword] = React.useState('');
    const router = useRouter()

    React.useEffect(() => {
      if(localStorage.getItem('token')){
        //auth
        if (true) {
          router.push('/')
        }
      }
    },[]);

    function handleClick() {
      login()
    }

    function login () {
      const url = `${basicUrl}/authenticate/password`
      const headers = { 'x-api-key': apiKey }
      const data = {
        "identifier": email,
        "password": password
      }
      axios.post(url, data, headers)
      .then(({data}) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          router.push('/')
        }
        setEmail('')
      })
      .catch(error => {
        console.log(error.message)
      })  
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
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" onChange={e => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={e => setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  backgroundColor={'#5AC421'}
                  color={'white'}
                  _hover={{
                    bg: '#6cb740',
                  }}
                  onClick={handleClick}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }