import React from "react";
import { Flex, Text, Grid } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useNavbarContext } from "./navbarContext";

export default function Historical(props) {
  const data = props.data;
  let value

  return (
    <>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Lifestyle and Life Stage
        </Text>
      </Flex>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="0"
        paddingBottom="0"
      >
        <strong>Age</strong>
        {
          value = data.encUsia,
          !value || value.includes('not ') || value.includes('Not ') ? (<Text>{'-'}</Text>):(<Text>{value}</Text>)
        }
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Marital Status</strong>
        {
          value = data.encStatusPernikahan,
          !value || value.includes('not ') || value.includes('Not ') ? (<Text>{'-'}</Text>):(<Text>{value}</Text>)
        }
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Product
        </Text>
      </Flex>
      <Grid>
        <strong>Product / Trx history</strong>
        {
          value = data.listHistoryProducts,
          !value || value.includes('not ') || value.includes('Not ') ? (
          <Text>{'-'}</Text>):(
            data.listHistoryProducts.split("/").map((product) => (
              <Grid
                borderBottom="1px"
                borderColor="gray.200"
                paddingTop="3"
                paddingBottom="3"
              >
                <Text>{product}</Text>
              </Grid>
            ))
          )
        }
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Acount status / Tier</strong>
        {
          value = data.encStatusNasabah,
          !value || value.includes('not ') || value.includes('Not ') ? (<Text>{'-'}</Text>):(<Text>{value}</Text>)
        }
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Lifestyle and Life Stage
        </Text>
      </Flex>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Campaign accepted</strong>
        {
          value = data.campaignStatus,
          !value || value.includes('not ') || value.includes('Not ') ? (<Text>{'-'}</Text>):(<Text>{value}</Text>)
        }
      </Grid>
    </>
  );
}
