import {
    Flex,
    Text,
    Spacer
  } from '@chakra-ui/react'

export default function NavbarHome() {
    return (
        <Flex backgroundColor={'#5AC421'} pos='sticky' top='0' left='0' >
            <Text fontSize='1xl' fontWeight='bold' margin='4' textColor='white'>HOME</Text>
            <Spacer />
            <svg 
              xmlns='http://www.w3.org/2000/svg' 
              color='white' 
              strokeWidth='0' 
              viewBox='0 0 40 20' 
              fill='currentColor' 
              stroke='currentColor' 
              width='3em' 
              height='3em' 
              focusable='false' 
            >
              <path d='M21 19a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3c0-1.103-.897-2-2-2s-2 .897-2 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-7.586A2 2 0 013.586 10l7-7a2 2 0 012.828 0l7 7A2 2 0 0121 11.414V19zm-5 0h3v-7.586l-7-7-7 7V19h3v-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3z'></path>
            </svg>
        </Flex>
    )
  }