import Link from 'next/link'
import {
  Flex,
  Container,
  Text
} from '@chakra-ui/react'

export default function List(props) {
  const data = props.data
  return (
    <Link href={{ pathname: '/view/detail', query: { id: data.id } }}>
      <Flex borderBottom='1px' borderColor='gray.200' padding='3'>
        <Container maxWidth='850' p='0' ml='3'>
          <strong>{data.encNama}</strong>
          <Text>{data.encNoHandphone}</Text>
          {
            !data.listProductRecommendation || data.listProductRecommendation.includes('not ') || data.listProductRecommendation.includes('Not ') || data.listProductRecommendation.includes('') ? 
            (<Text>{'Rekomendasi: Saat ini belum ada data tersedia untuk cabang anda'}</Text>) : (<Text>{`Rekomendasi: ${data.listProductRecommendation.toString().replaceAll(",", ", ")}`}</Text>)
          }
        </Container>
      </Flex>
    </Link>
  )
}
