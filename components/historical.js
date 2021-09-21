import React from 'react';
import {
    Flex,
    Text,
    Grid
  } from "@chakra-ui/react";
import { InfoIcon } from '@chakra-ui/icons'

export default function Historical(props) {
  const data = props.data
  const basicUrl = 'https://prod-qore-app.qorebase.io/vTS3B25NhFzZURO'
  const [products, setProducts] = React.useState([]);
  const [campains, setCampains] = React.useState([]);
  const [customerServices, setCustomerServices] = React.useState([]);

  React.useEffect(() => {
    console.log(data.id);
    if (data.id) {
      fetchDataPoducts()
      fetchCampaigns()
      fetchCustomerServices()
    }
    
  },[data]);
  
  function handleErrors(res) {
    if (!res) throw new Error(res.error);
    return res;
  }

  function fetchDataPoducts () {
    // fetch(`${basicUrl}/productWithAudienceFilter/rows?limit=50&offset=0&$order=asc&audience=${data.name}`, {
    fetch(`${basicUrl}/productWithAudienceFilter/rows?limit=50&offset=0&$order=asc`, {
      method: "GET",
      headers: {
        'x-api-key': 'cd4e1ee0-e3fa-4973-b773-e2aee6dcc043'
      },
    })
    .then((res) => res.json())
    .then(handleErrors)
    .then((data) => {
      if (data.nodes) {
        setProducts(data.nodes)
      }
    }) 
  }

  function fetchCampaigns () {
    // fetch(`${basicUrl}/campaignsWithAudienceFilter/rows?limit=50&offset=0&$order=asc&audience=${data.name}`, {
    fetch(`${basicUrl}/campaignsWithAudienceFilter/rows?limit=50&offset=0&$order=asc`, {
      method: "GET",
      headers: {
        'x-api-key': 'cd4e1ee0-e3fa-4973-b773-e2aee6dcc043'
      },
    })
    .then((res) => res.json())
    .then(handleErrors)
    .then((data) => {
      if (data.nodes) {
        setCampains(data.nodes)
      }
    }) 
  }

  function fetchCustomerServices () {
    // fetch(`${basicUrl}/customerServicesWithAudiences/rows?limit=50&offset=0&$order=asc&audience=${data.name}`, {
    fetch(`${basicUrl}/customerServicesWithAudiences/rows?limit=50&offset=0&$order=asc`, {
      method: "GET",
      headers: {
        'x-api-key': 'cd4e1ee0-e3fa-4973-b773-e2aee6dcc043'
      },
    })
    .then((res) => res.json())
    .then(handleErrors)
    .then((data) => {
      if (data.nodes) {
        setCustomerServices(data.nodes)
      }
    }) 
  }

  return (
    <>
      <Flex backgroundColor='blue.50' borderRadius="5" marginBottom='3' >
          <InfoIcon boxSize='6' color='purple.900' margin='3' />
          <Text fontSize='1xl' fontWeight='bold' margin='3'>Products</Text>
      </Flex>
      <Grid borderBottom="1px" borderColor="gray.200" paddingTop='3' paddingBottom='3'>
        <strong>Product History</strong>
        {products.map((product, i)=>{
            let component
            { 
              i !== products.length-1 ? (
                component = (
                  <Grid borderBottom="1px" borderColor="gray.200" paddingTop='3' paddingBottom='3'>
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
            return component
          })
        }
      </Grid>
     
      <Flex backgroundColor='blue.50' borderRadius="5">
          <InfoIcon boxSize='6' color='purple.900' margin='3' />
          <Text fontSize='1xl' fontWeight='bold' margin='3'>Campaigns</Text>
      </Flex>
      <Grid borderBottom="1px" borderColor="gray.200" paddingTop='3' paddingBottom='3'>
        {campains.map((campain, i)=>{
            let component
            { 
              i !== campains.length-1 ? (
                component = (
                  <Grid borderBottom="1px" borderColor="gray.200" paddingTop='3' paddingBottom='3'>
                    <strong>{campain.name}</strong>
                    <Text>{campain.description}</Text>
                    <Text>{campain.campaignDate}</Text>
                  </Grid>
                )
              ) : (
                component = (
                  <Grid paddingTop='3' paddingBottom='3'>
                    <strong>{campain.name}</strong>
                    <Text>{campain.description}</Text>
                  </Grid>
                )
              )
            }
            return component
          })
        }
      </Grid>
      
      <Flex backgroundColor='blue.50' borderRadius="5" marginBottom='3' >
          <InfoIcon boxSize='6' color='purple.900' margin='3' />
          <Text fontSize='1xl' fontWeight='bold' margin='3'>Customer Services</Text>
      </Flex>
      <Grid paddingTop='3' paddingBottom='3'>
        {customerServices.map((customerService, i)=>{
            let component
            { 
              i !== customerServices.length-1 ? (
                component = (
                  <Grid borderBottom="1px" borderColor="gray.200" paddingTop='3' paddingBottom='3'>
                    <strong>{customerService.name}</strong>
                    <Text>{customerService.type}</Text>
                    <Text>{customerService.contactedAt}</Text>
                  </Grid>
                )
              ) : (
                component = (
                  <Grid paddingTop='3' paddingBottom='3'>
                    <strong>{customerService.name}</strong>
                    <Text>{customerService.type}</Text>
                    <Text>{customerService.contactedAt}</Text>
                  </Grid>
                )
              )
            }
            return component
          })
        }
      </Grid>
    </>
  )
}
