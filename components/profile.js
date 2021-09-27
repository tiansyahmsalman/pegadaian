import { Flex, Text, Grid } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

export default function Profile(props) {
  const data = props.data;
  let value
  return (
    <>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Profile
        </Text>
      </Flex>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>NIK</strong>
        {
          value = data.encNik,
          !value || value.includes('not ') || value.includes('Not ') ? (<Text>{'-'}</Text>):(<Text>{value}</Text>)
        }
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Name</strong>
        {
          value = data.encNama,
          !value || value.includes('not ') || value.includes('Not ') ? (<Text>{'-'}</Text>):(<Text>{value}</Text>)
        }
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>City</strong>
        {
          value = data.kabupatenKota,
          !value || value.includes('not ') || value.includes('Not ') ? (<Text>{'-'}</Text>):(<Text>{value}</Text>)
        }
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Gender</strong>
        {
          value = data.encGender,
          !value || value.includes('not ') || value.includes('Not ') ? (<Text>{'-'}</Text>):(<Text>{value}</Text>)
        }
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Family Status</strong>
        {
          value = data.encStatusPernikahan,
          !value || value.includes('not ') || value.includes('Not ') ? (<Text>{'-'}</Text>):(<Text>{value}</Text>)
        }
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Occupation</strong>
        {
          value = data.encPekerjaan,
          !value || value.includes('not ') || value.includes('Not ') ? (<Text>{'-'}</Text>):(<Text>{value}</Text>)
        }
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Income Range</strong>
        {
          value = data.encRangeGaji,
          !value || value.includes('not ') || value.includes('Not ') ? (<Text>{'-'}</Text>):(<Text>{value}</Text>)
        }
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Churn Probability</strong>
        {
          value = data.chrunPred,
          !value || value.includes('not ') || value.includes('Not ') ? (<Text>{'-'}</Text>):(<Text>{value}</Text>)
        }
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>CLTV</strong>
        {
          value = data.labelClvInvestasi,
          !value || value.includes('not ') || value.includes('Not ') ? (<Text>{'-'}</Text>):(<Text>{value}</Text>)
        }
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Credit Obj</strong>
          {
            value = data.creditObj,
            !value || value.includes('not ') || value.includes('Not ') ? 
            (<Text>{'-'}</Text>):(
              data.creditObj.split("/").map((obj, i) => (
                <Grid
                  paddingTop="1"
                  paddingBottom="1"
                >
                  <Text>{obj}</Text>
                </Grid>
              ))
            )
          }
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Contact Detail
        </Text>
      </Flex>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>No Handphone</strong>
        {
          value = data.encNoHandphone,
          !value || value.includes('not ') || value.includes('Not ') ? (<Text>{'-'}</Text>):(<Text>{value}</Text>)
        }
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Last Contacted</strong>
        {
          value = data.encLastContacted,
          !value || value.includes('not ') || value.includes('Not ') ? (<Text>{'-'}</Text>):(<Text>{value}</Text>)
        }
      </Grid>
      {/* <Flex backgroundColor="blue.50" borderRadius="5">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Customer Service
        </Text>
      </Flex>       */}
    </>
  );
}
