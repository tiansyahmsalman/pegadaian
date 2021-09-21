import {
    Flex,
    Text,
    Spacer,
    Link
  } from "@chakra-ui/react"
import { ArrowBackIcon } from '@chakra-ui/icons'

export default function NavbarDetail(props) {
    return (
        <Flex backgroundColor={'#5AC421'} pos="sticky" top="0" left="0" >
            <Link href='/'>
              <ArrowBackIcon boxSize='7' color='white' m='3' />
            </Link>
            <Text fontSize='1xl' fontWeight='bold' mt='4' mb='4' textColor='white'>{props.name}</Text>
            <Spacer />
            <Link href='/'>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                color='white' 
                stroke-width="0" 
                viewBox="0 0 40 20" 
                fill="currentColor" 
                stroke="currentColor" 
                width="3em" 
                height="3em" 
                focusable="false" 
              >
                <path d="M21 20a1 1 0 01-2 0c0-2.757-2.243-5-5-5h-4c-2.757 0-5 2.243-5 5a1 1 0 01-2 0c0-3.859 3.14-7 7-7h4c3.859 0 7 3.141 7 7zM12 4c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0-2a5 5 0 11-.001 10.001A5 5 0 0112 2z"></path>
              </svg>
            </Link>
        </Flex>
    )
  }