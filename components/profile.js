import { Flex, Text, Grid } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

export default function Profile(props) {
  const data = props.data;
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
        <Text>{data.encNik}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Name</strong>
        <Text>{data.encNama}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>City</strong>
        <Text>{data.kabupatenKota}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Gender</strong>
        <Text>{data.encGender}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Family Status</strong>
        <Text>{data.encStatusPernikahan}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Occupation</strong>
        <Text>{data.encPekerjaan}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Income Range</strong>
        <Text>{data.encRangeGaji}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Churn Probability</strong>
        <Text>{"-"}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>CLTV</strong>
        <Text>{"-"}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Credit Obj</strong>
          {data.creditObj.split("/").map((obj, i) => (
            <Grid
              paddingTop="1"
              paddingBottom="1"
            >
              <Text>{obj}</Text>
            </Grid>
          ))}
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
        <Text>{data.encNoHandphone}</Text>
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Last Contacted</strong>
        <Text>{data.encLastContacted}</Text>
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
