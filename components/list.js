import Link from 'next/link'
import {
  Flex,
  Container,
  Image,
  Center,
  Text
} from '@chakra-ui/react'

export default function List(props) {
  const data = props.data
  return (
    <Link href={{ pathname: '/view/detail', query: { id: data.id } }}>
      <Flex borderBottom='1px' borderColor='gray.200' padding='3'>
        <Center>
          <Image
            borderRadius='5'
            src={data.picture}
            alt='image'
            fit='cover'
            boxSize='64px'
          />
        </Center>
        
        <Container maxWidth='750' p='0' ml='3'>
          <strong>{data.name}</strong>
          <Text>{data.address}</Text>
          <Text>{data.city}</Text>
        </Container>
      </Flex>
    </Link>
  )
}
