import React from "react";
import { Flex, Text, Grid } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import setPropertieString from '../helper/setPropertieString'
import setPropertieList from '../helper/setPropertieList'

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
        {setPropertieString(data.encUsia)}
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Marital Status</strong>
        {setPropertieString(data.encStatusPernikahan)}
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Product
        </Text>
      </Flex>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Product / Trx history</strong>
        {setPropertieList(data.listHistoryProducts)}
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Acount status / Tier</strong>
        {setPropertieString(data.encStatusNasabah)}
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          CLV
        </Text>
      </Flex>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Predicted CLV Investasi</strong>
        {setPropertieString(data.predictedClvnvestasi)}
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Label CLV Investasi</strong>
        {setPropertieString(data.labelClvInvestasi)}
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Predicted CLV Angsuran</strong>
        {setPropertieString(data.predictedClvAngsuran)}
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Label CLV Angsuran</strong>
        {setPropertieString(data.labelClvAngsuran)}
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Predicted CLV non Angsuran</strong>
        {setPropertieString(data.predictedClvNonAngsuran)}
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Label CLV non Angsuran</strong>
        {setPropertieString(data.labelClvNonAngsuran)}
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Campaign
        </Text>
      </Flex>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Campaign accepted</strong>
        {setPropertieString(data.campaignStatus)}
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Other Information
        </Text>
      </Flex>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Outlet</strong>
        {setPropertieString(data.outlet)}
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Outlet Code</strong>
        {setPropertieString(data.kodeOutlet)}
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Branch</strong>
        {setPropertieString(data.cabang)}
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Branch Code</strong>
        {setPropertieString(data.kodeCabang)}
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Regional Office</strong>
        {setPropertieString(data.kanwil)}
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Province</strong>
        {setPropertieString(data.namaProvinsi)}
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Customer Status</strong>
        {setPropertieString(data.statusNasabah)}
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Rating</strong>
        {setPropertieString(data.rating)}
      </Grid>
    </>
  );
}


// Other Information (Category)
// Outlet: outlet
// Outlet Code: kode_outlet
// Branch: cabang
// Branch Code: kode_cabang
// Regional Office: kanwil
// Province: nama_provinsi
// Customer Status: status_nasabah
// Rating: rating