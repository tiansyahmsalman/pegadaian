import React from "react";
import { Flex, Text, Grid } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useNavbarContext } from "./navbarContext";

export default function Historical(props) {
  const data = props.data;
  const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID;
  const apiKey = process.env.API_KEY;
  // const [products, setProducts] = React.useState([]);
  // const [campains, setCampains] = React.useState([]);
  // const [customerServices, setCustomerServices] = React.useState([]);
  // const navbarContext = useNavbarContext();

  return (
    <>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          General
        </Text>
      </Flex>

      <Grid >
          <strong>Credit Obj</strong>
          {data.creditObj.split("/").map((obj, i) => (
            <Grid
              borderBottom="1px"
              borderColor="gray.200"
              paddingTop="3"
              paddingBottom="3"
            >
              <Text>{obj}</Text>
            </Grid>
          ))}
      </Grid>

      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          History
        </Text>
      </Flex>

      <Grid>
        <strong>List History Product</strong>
        {data.listActiveProducts.split("/").map((product) => (
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

      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Active
        </Text>
      </Flex>

      <Grid>
        <strong>List Active Product</strong>
        {data.listActiveProducts.split("/").map((product) => (
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

      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Recomendation
        </Text>
      </Flex>
      
      <Grid>
        <strong>List Product Recomendation</strong>
        {data.listProductRecommendation.split("/").map((product) => (
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
    </>
  );
}
