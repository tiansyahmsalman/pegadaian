import {
    Flex,
    Text,
    Grid
  } from "@chakra-ui/react";
import { InfoIcon } from '@chakra-ui/icons'

export default function Navbar({ children }) {
    return (
        <Flex backgroundColor={'#5AC421'} pos="sticky" top="0" left="0" >
            <Text fontSize='1xl' fontWeight='bold' margin='4' textColor='white'>HOME</Text>
        </Flex>
    )
  }