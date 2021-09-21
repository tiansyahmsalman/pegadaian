import {
    Flex,
    Text,
    Grid
  } from "@chakra-ui/react";
import { InfoIcon } from '@chakra-ui/icons'

export default function Navbar({ children }) {
    return (
        <Flex backgroundColor={'#5AC421'} marginBottom='3' >
            <Text fontSize='1xl' fontWeight='bold' margin='4' textColor='white'>HOME</Text>
        </Flex>
    )
  }