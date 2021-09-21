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
  
  export default function SimpleCard() {
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
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  backgroundColor={'#5AC421'}
                  color={'white'}
                  _hover={{
                    bg: '#6cb740',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }