import React from "react";
import { Flex, Text, Grid } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useNavbarContext } from "./navbarContext";

export default function Historical(props) {
  const data = props.data;
  const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID;
  const apiKey = process.env.API_KEY;

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
        <Text>{data.encUsia}</Text>
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Marital Status</strong>
        <Text>{data.encStatusPernikahan}</Text>
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Product
        </Text>
      </Flex>
      <Grid>
        <strong>Product / Trx history</strong>
        {data.listHistoryProducts.split("/").map((product) => (
          <Grid
            borderBottom="1px"
            borderColor="gray.200"
            paddingTop="3"
            paddingBottom="3"
          >
            <Text>{product}</Text>
          </Grid>
        ))}
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Acount status / Tier</strong>
        <Text>{data.encStatusNasabah}</Text>
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
        <Text>{data.CampignStatus}</Text>
      </Grid>
    </>
  );
}
