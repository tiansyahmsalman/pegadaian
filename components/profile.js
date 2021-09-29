import { Flex, Text, Grid } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import setPropertieString from '../helper/setPropertieString'
import setPropertieList from '../helper/setPropertieList'
import convertDateTime from '../helper/convertDateTime'

export default function Profile(props) {
  const data = props.data;
  return (
    <>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Informasi Pribadi
        </Text>
      </Flex>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>NIK</strong>
        {setPropertieString(data.encNik)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Nama</strong>
        {setPropertieString(data.encNama)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Kota / Domisili</strong>
        {setPropertieString(data.kabupatenKota)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Jenis Kelamin</strong>
        {setPropertieString(data.encGender)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Pekerjaan</strong>
        {setPropertieString(data.encPekerjaan)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Pendapatan</strong>
        {setPropertieString(data.encRangeGaji)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Potensi nasabah akan berhenti membeli produk Pegadaian</strong>
        <Flex>{setPropertieString(data.churnPred)}{'%'}</Flex>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Objektif Kredit</strong>
        {setPropertieList(data.creditObj)}
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Rincian Kontak
        </Text>
      </Flex>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Nomor Telepon</strong>
        {setPropertieString(data.encNoHandphone)}
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Terakhir Dikontak</strong>
        {setPropertieString(convertDateTime(data.encLastContacted))}
      </Grid>
    </>
  );
}
