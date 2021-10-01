import Link from 'next/link'
import {
  Flex,
  Container,
  Text
} from '@chakra-ui/react'
import reFormatList from '../helper/reFormatList'

export default function List(props) {
  const data = props.data
  return (
    <Link href={{ pathname: '/view/detail', query: { id: data.id } }}>
      <Flex borderBottom='1px' borderColor='gray.200' padding='3'>
        <Container maxWidth='850' p='0' ml='3'>
          <strong>{data.encNama}</strong>
          <Text>{data.encNoHandphone}</Text>
          {
            !data.listProductRecommendation || data.listProductRecommendation.includes('not ') || data.listProductRecommendation.includes('Not ') ? 
            (<Text>{'-'}</Text>) : (<Text>{reFormatList(data.listProductRecommendation)}</Text>)
          }
        </Container>
      </Flex>
    </Link>
  )
}
