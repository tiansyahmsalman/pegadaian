import {
  Text,
  Grid
} from '@chakra-ui/react'

export default function Ltv(props) {
  const data = props.data
  return (
    <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>{`Golongan ${data.properties_golongan}`}</strong>
        <Text>{`Kenaikan LTV ${data.properties_kenaikan_ltv}`}</Text>
        <Text>{`Up           ${data.properties_up}`}</Text>
        <Text>{`Up Max       ${data.properties_up_max}`}</Text>
        <Text>{`Deskripsi    ${data.properties_description}`}</Text>
      </Grid>
  )
}
