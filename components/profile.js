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
        <strong>CIF</strong>
        <Text>{data.encCif}</Text>
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
        <strong>Usia</strong>
        <Text>{data.encUsia}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Alamat</strong>
        <Text>{data.encAlamat}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Tempat Lahir</strong>
        <Text>{data.encTempatLahir}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Tanggal Lahir</strong>
        <Text>{data.encTanggalLahir}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Status Pernikahan</strong>
        <Text>{data.encStatusPernikahan}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Jumlah Tanggungan</strong>
        <Text>{data.encJumlahTanggungan}</Text>
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Job Description
        </Text>
      </Flex>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Status Nasabah</strong>
        <Text>{data.encStatusNasabah}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Pekerjaan</strong>
        <Text>{data.encPekerjaan}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Range Gaji</strong>
        <Text>{data.encRangeGaji}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Kanwil</strong>
        <Text>{data.kanwil}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Kabupaten/Kote</strong>
        <Text>{data.kabupatenKota}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Provinsi</strong>
        <Text>{data.namaProvinsi}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Cabang</strong>
        <Text>{data.cabang}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Kode Cabang</strong>
        <Text>{data.kodeCabang}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Outlet</strong>
        <Text>{data.outlet}</Text>
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Kode Outlet</strong>
        <Text>{data.kodeOutlet}</Text>
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Contact Detail
        </Text>
      </Flex>
      <Grid paddingTop="3" paddingBottom="3">
        <strong>No Handphone</strong>
        <Text>{data.encNoHandphone}</Text>
      </Grid>
      <Grid paddingTop="3" paddingBottom="3">
        <strong>Last Contacted</strong>
        <Text>{data.encLastContacted}</Text>
      </Grid>
    </>
  );
}
