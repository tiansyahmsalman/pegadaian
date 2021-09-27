import React from "react";
import { Flex, Text, Grid } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useNavbarContext } from "./navbarContext";

export default function Historical(props) {
  const data = props.data;
  const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID;
  const apiKey = process.env.API_KEY;
  const [products, setProducts] = React.useState([]);
  const [campains, setCampains] = React.useState([]);
  const [customerServices, setCustomerServices] = React.useState([]);
  const navbarContext = useNavbarContext();

  React.useEffect(() => {
    if (data.id) {
      fetchDataPoducts();
      fetchCampaigns();
      fetchCustomerServices();
    }
  }, [data]);

  async function fetchDataPoducts() {
    const product = await navbarContext.getProducts();
    if (product.data) {
      setProducts(product.data.nodes);
    } else {
    }
  }

  async function fetchCampaigns() {
    const campaigns = await navbarContext.getCampaigns();
    if (campaigns.data) {
      setCampains(campaigns.data.nodes);
    } else {
    }
  }

  async function fetchCustomerServices() {
    const customerServices = await navbarContext.getCustomerServices();
    if (customerServices.data) {
      setCustomerServices(customerServices.data.nodes);
    } else {
    }
  }

  return (
    <>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          General
        </Text>
      </Flex>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        {/* <strong>Product History</strong> */}
        {/* {products.map((product, i)=>{
            let component
            { 
              i !== products.length-1 ? (
                component = (
                  <Grid borderBottom='1px' borderColor='gray.200' paddingTop='3' paddingBottom='3'>
                    <strong>{product.name}</strong>
                    <Text>{product.activity}</Text>
                  </Grid>
                )
              ) : (
                component = (
                  <Grid paddingTop='3' paddingBottom='3'>
                    <strong>{product.name}</strong>
                    <Text>{product.activity}</Text>
                  </Grid>
                )
              )
            }
            return <div key={i}>{component}</div>
          })
        } */}
        <Grid
          // borderBottom="1px"
          // borderColor="gray.200"
          paddingTop="3"
          paddingBottom="3"
        >
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
        <Grid
          borderBottom="1px"
          borderColor="gray.200"
          paddingTop="3"
          paddingBottom="3"
        >
          <strong>Rating</strong>
          <Text>{data.rating}</Text>
        </Grid>
      </Grid>

      <Flex backgroundColor="blue.50" borderRadius="5">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          History
        </Text>
      </Flex>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
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
      {/* <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        {campains.map((campain, i) => {
          let component;
          {
            i !== campains.length - 1
              ? (component = (
                  <Grid
                    borderBottom="1px"
                    borderColor="gray.200"
                    paddingTop="3"
                    paddingBottom="3"
                  >
                    <strong>{campain.name}</strong>
                    <Text>{campain.description}</Text>
                    <Text>{campain.campaignDate}</Text>
                  </Grid>
                ))
              : (component = (
                  <Grid paddingTop="3" paddingBottom="3">
                    <strong>{campain.name}</strong>
                    <Text>{campain.description}</Text>
                  </Grid>
                ));
          }
          return <div key={i}>{component}</div>;
        })}
      </Grid> */}
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Active
        </Text>
      </Flex>
      {/* <Grid paddingTop="3" paddingBottom="3">
        {customerServices.map((customerService, i) => {
          let component;
          {
            i !== customerServices.length - 1
              ? (component = (
                  <Grid
                    borderBottom="1px"
                    borderColor="gray.200"
                    paddingTop="3"
                    paddingBottom="3"
                  >
                    <strong>{customerService.name}</strong>
                    <Text>{customerService.type}</Text>
                    <Text>{customerService.contactedAt}</Text>
                  </Grid>
                ))
              : (component = (
                  <Grid paddingTop="3" paddingBottom="3">
                    <strong>{customerService.name}</strong>
                    <Text>{customerService.type}</Text>
                    <Text>{customerService.contactedAt}</Text>
                  </Grid>
                ));
          }
          return <div key={i}>{component}</div>;
        })}
      </Grid> */}
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
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
      <Grid paddingTop="3" paddingBottom="3">
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
