import {
  Flex,
  Text,
  Grid,
  Box,
  Center
} from "@chakra-ui/react";

export default function Footer({ children }) {
  return (
    <Flex pos="sticky" bg="gray.50" bottom="0" borderTop="1px" >
      <Center as="button" flex="1">
            <Text fontSize='1xl' fontWeight='bold' margin='4' textColor='black'>Home</Text>
      </Center>
      <Center as="button" flex="1">
          <Text fontSize='1xl' fontWeight='bold' margin='4' textColor='black'>Profile</Text>
      </Center>
    </Flex>
  )
}