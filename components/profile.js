import { Flex, Text, Grid } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import setPropertyString from '../helper/setPropertyString'
import setPropertyList from '../helper/setPropertyList'
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
        {setPropertyString(data.encNik)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Nama</strong>
        {setPropertyString(data.encNama)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Kota / Domisili</strong>
        {setPropertyString(data.kabupatenKota)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Jenis Kelamin</strong>
        {setPropertyString(data.encGender)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Pekerjaan</strong>
        {setPropertyString(data.encPekerjaan)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Pendapatan</strong>
        {setPropertyString(data.encRangeGaji)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Potensi nasabah akan berhenti membeli produk Pegadaian</strong>
        <Flex>{setPropertyString(data.churnPred)}</Flex>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Objektif Kredit</strong>
        {setPropertyList(data.creditObj)}
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
        {setPropertyString(data.encNoHandphone)}
      </Grid>
      <Grid 
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Terakhir Dikontak</strong>
        {setPropertyString(convertDateTime(data.encLastContacted))}
      </Grid>
    </>
  );
}
