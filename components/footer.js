import {
  Flex,
  Text,
  Center,
  Grid,
  Link
} from "@chakra-ui/react";

export default function Footer({ children }) {
  return (
    <Flex pos="sticky" bg="gray.50" bottom="0" borderTop="1px" >
      <Center as="button" flex="1">
        <Link href='/'>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            color='black'
            stroke-width="0" 
            viewBox="0 0 40 20" 
            fill="currentColor" 
            stroke="currentColor" 
            width="2.5em" 
            height="2.5em" 
            focusable="false"
          >
            <path d="M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zM4 8V4h4v4H4zm10 12h-4v-4h4v4zm0-6h-4v-4h4v4zm-4-6V4h4v4h-4zm10 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"></path>
          </svg>
        </Link>
      </Center>
      <Center as="button" flex="1">
        <Link>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            color='black'
            stroke-width="0" 
            viewBox="0 0 40 20" 
            fill="currentColor" 
            stroke="currentColor" 
            width="2.5em" 
            height="2.5em" 
            focusable="false" 
          >
            <path d="M21 20a1 1 0 01-2 0c0-2.757-2.243-5-5-5h-4c-2.757 0-5 2.243-5 5a1 1 0 01-2 0c0-3.859 3.14-7 7-7h4c3.859 0 7 3.141 7 7zM12 4c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0-2a5 5 0 11-.001 10.001A5 5 0 0112 2z"></path>
          </svg>
        </Link>
      </Center>
    </Flex>
  )
}