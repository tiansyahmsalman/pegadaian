import React from 'react'
import {
    Flex,
    Text,
    Grid
  } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'
import axios from 'axios'

export default function Historical(props) {
  const data = props.data
  const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID
  const apiKey = process.env.API_KEY
  const [products, setProducts] = React.useState([])
  const [campains, setCampains] = React.useState([])
  const [customerServices, setCustomerServices] = React.useState([])

  React.useEffect(() => {
    if (data.id) {
      fetchDataPoducts()
      fetchCampaigns()
      fetchCustomerServices()
    }
    
  },[data])

  function fetchDataPoducts () {
    const url = `${basicUrl}/productWithAudienceFilter/rows?limit=50&offset=0&$order=asc`
    const headers = { 'x-api-key': apiKey }
    
    axios.get(url, { headers })
    .then(({data}) => {
      if (data.nodes) {
        setProducts(data.nodes)
      }
    }) 
    .catch(error => {
      console.log(error)
    })
  }

  function fetchCampaigns () {
    const url = `${basicUrl}/campaignsWithAudienceFilter/rows?limit=50&offset=0&$order=asc`
    const headers = { 'x-api-key': apiKey }
    
    axios.get(url, { headers })
    .then(({data}) => {
      if (data.nodes) {
        setCampains(data.nodes)
      }
    }) 
    .catch(error => {
      console.log(error)
    })
  }

  function fetchCustomerServices () {
    const url = `${basicUrl}/customerServicesWithAudiences/rows?limit=50&offset=0&$order=asc`
    const headers = { 'x-api-key': apiKey }
    
    axios.get(url, { headers })
    .then(({data}) => {
      if (data.nodes) {
        setCustomerServices(data.nodes)
      }
    }) 
    .catch(error => {
      console.log(error)
    })
    
  }

  return (
    <>
      <Flex backgroundColor='blue.50' borderRadius='5' marginBottom='3' >
          <InfoIcon boxSize='6' color='purple.900' margin='3' />
          <Text fontSize='1xl' fontWeight='bold' margin='3'>Products</Text>
      </Flex>
      <Grid borderBottom='1px' borderColor='gray.200' paddingTop='3' paddingBottom='3'>
        <strong>Product History</strong>
        {products.map((product, i)=>{
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
        }
      </Grid>
     
      <Flex backgroundColor='blue.50' borderRadius='5'>
          <InfoIcon boxSize='6' color='purple.900' margin='3' />
          <Text fontSize='1xl' fontWeight='bold' margin='3'>Campaigns</Text>
      </Flex>
      <Grid borderBottom='1px' borderColor='gray.200' paddingTop='3' paddingBottom='3'>
        {campains.map((campain, i)=>{
            let component
            { 
              i !== campains.length-1 ? (
                component = (
                  <Grid borderBottom='1px' borderColor='gray.200' paddingTop='3' paddingBottom='3'>
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
            return <div key={i}>{component}</div>
          })
        }
      </Grid>
      
      <Flex backgroundColor='blue.50' borderRadius='5' marginBottom='3' >
          <InfoIcon boxSize='6' color='purple.900' margin='3' />
          <Text fontSize='1xl' fontWeight='bold' margin='3'>Customer Services</Text>
      </Flex>
      <Grid paddingTop='3' paddingBottom='3'>
        {customerServices.map((customerService, i)=>{
            let component
            { 
              i !== customerServices.length-1 ? (
                component = (
                  <Grid borderBottom='1px' borderColor='gray.200' paddingTop='3' paddingBottom='3'>
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
            return <div key={i}>{component}</div>
          })
        }
      </Grid>
    </>
  )
}
