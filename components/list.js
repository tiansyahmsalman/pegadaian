import Link from 'next/link'
import {
  Flex,
  Container,
  Image,
  Center,
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
          <Text>{`No Telp : ${data.encNoHandphone}`}</Text>
          {
            !data.listProductRecommendation || data.listProductRecommendation.includes('not ') || data.listProductRecommendation.includes('Not ') ? 
            (
              !data.listHistoryProducts || data.listHistoryProducts.includes('not ') || data.listHistoryProducts.includes('Not ') ? 
              (<Text>{'List rekomendasi produk : -'}</Text>) : (<Text>{`List rekomendasi produk : ${reFormatList(data.listHistoryProducts)}`}</Text>)
            ) : (<Text>{`List rekomendasi produk : ${reFormatList(data.listProductRecommendation)}`}</Text>)
          }
        </Container>
      </Flex>
    </Link>
  )
}
