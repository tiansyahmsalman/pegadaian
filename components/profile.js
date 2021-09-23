import {
    Flex,
    Text,
    Grid
  } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'

export default function Profile(props) {
  const data = props.data
  return (
    <>
      <Flex backgroundColor='blue.50' borderRadius='5' marginBottom='3' >
          <InfoIcon boxSize='6' color='purple.900' margin='3' />
          <Text fontSize='1xl' fontWeight='bold' margin='3'>Profile</Text>
      </Flex>
      <Grid borderBottom='1px' borderColor='gray.200' paddingTop='3' paddingBottom='3'>
          <strong>Gender</strong>
          <Text>{data.gender}</Text>
      </Grid>
      <Grid borderBottom='1px' borderColor='gray.200' paddingTop='3' paddingBottom='3'>
          <strong>Address</strong>
          <Text>{data.address}</Text>
      </Grid>
      <Grid borderBottom='1px' borderColor='gray.200' paddingTop='3' paddingBottom='3'>
          <strong>Family Status</strong>
          <Text>{data.familyStatus}</Text>
      </Grid>
      <Grid borderBottom='1px' borderColor='gray.200' paddingTop='3' paddingBottom='3'>
          <strong>Occupation</strong>
          <Text>{data.occupation}</Text>
      </Grid>
      <Grid borderBottom='1px' borderColor='gray.200' paddingTop='3' paddingBottom='3'>
          <strong>Income</strong>
          <Text>{data.income}</Text>
      </Grid>
      <Grid borderBottom='1px' borderColor='gray.200' paddingTop='3' paddingBottom='3'>
          <strong>Churn Probability</strong>
          <Text>{data.churnProbability} %</Text>
      </Grid>
      <Grid paddingTop='3' paddingBottom='3'>
          <strong>CLTV</strong>
          <Text>{data.xltv} %</Text>
      </Grid>
      <Flex backgroundColor='blue.50' borderRadius='5'>
          <InfoIcon boxSize='6' color='purple.900' margin='3' />
          <Text fontSize='1xl' fontWeight='bold' margin='3'>Contact Details</Text>
      </Flex>
      <Grid borderBottom='1px' borderColor='gray.200' paddingTop='3' paddingBottom='3'>
          <strong>Phone Number</strong>
          <Text>{data.phone}</Text>
      </Grid>
      <Grid borderBottom='1px' borderColor='gray.200' paddingTop='3' paddingBottom='3'>
          <strong>Email</strong>
          <Text>{data.email}</Text>
      </Grid>
      <Grid paddingTop='3' paddingBottom='3'>
          <strong>Last Contacted</strong>
          <Text>{data.lastDateContacted}</Text>
      </Grid>
      <Flex backgroundColor='blue.50' borderRadius='5' marginBottom='3' >
          <InfoIcon boxSize='6' color='purple.900' margin='3' />
          <Text fontSize='1xl' fontWeight='bold' margin='3'>Lifestyle and Life Stage</Text>
      </Flex>
      <Grid paddingTop='3' paddingBottom='3'>
          <strong>Age</strong>
          <Text>{data.age}</Text>
      </Grid>
    </>
  )
}
