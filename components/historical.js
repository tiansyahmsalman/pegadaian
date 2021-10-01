import React from "react";
import { Flex, Text, Grid } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import setPropertieString from "../helper/setPropertieString";
import setPropertieList from "../helper/setPropertieList";
import setGradeAngsuran from "../helper/setGradeAngsuran";
import setGradeNonAngsuran from "../helper/setGradeNonAngsuran";
import setGradeInvestasi from "../helper/setGradeInvestasi";

export default function Historical(props) {
  const data = props.data;

  return (
    <>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Gaya Hidup & Tahap Kehidupan
        </Text>
      </Flex>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="0"
        paddingBottom="0"
      >
        <strong>Umur</strong>
        {setPropertieString(data.encUsia)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Status Pernikahan</strong>
        {setPropertieString(data.encStatusPernikahan)}
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Produk
        </Text>
      </Flex>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Transaksi yang sudah selesai</strong>
        {setPropertieList(data.listHistoryProducts)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Transaksi yang sedang berlangsung</strong>
        {setPropertieList(data.listActiveProducts)}
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Up-sell & Cross-sell
        </Text>
      </Flex>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Rekomendasi produk</strong>
        {setPropertieList(data.listProductRecommendation)}
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Segmentasi Transaksi
        </Text>
      </Flex>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Produk non Angsuran</strong>
        {setPropertieString(setGradeNonAngsuran(data.segmentInNonAngsuran))}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Produk Angsuran</strong>
        {setPropertieString(setGradeAngsuran(data.segmentInAngsuran))}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Produk Investasi</strong>
        {setPropertieString(setGradeInvestasi(data.segmentInInvestasi))}
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Nilai Konsumen
        </Text>
      </Flex>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Tipe Nasabah - Produk non Angsuran</strong>
        {setPropertieString(data.labelClvNonAngsuran)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Prediksi Pengeluaran Nasabah - Produk non Angsuran</strong>
        {setPropertieString(data.predictedClvNonAngsuran)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Tipe Nasabah - Produk Angsuran</strong>
        {setPropertieString(data.labelClvAngsuran)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Prediksi Pengeluaran Nasabah - Produk Angsuran</strong>
        {setPropertieString(data.predictedClvAngsuran)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Tipe Nasabah - Produk Investasi</strong>
        {setPropertieString(data.labelClvInvestasi)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Prediksi Pengeluaran Nasabah - Produk Investasi</strong>
        {setPropertieString(data.predictedClvnvestasi)}
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Kampanye
        </Text>
      </Flex>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Kampanye diterima</strong>
        {setPropertieString(data.campaignStatus)}
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Informasi Lainnya
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
        <strong>Kode Outlet</strong>
        {setPropertieString(data.kodeOutlet)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Cabang</strong>
        {setPropertieString(data.cabang)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Kode Cabang</strong>
        {setPropertieString(data.kodeCabang)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Kantor Wilayah</strong>
        {setPropertieString(data.kanwil)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Provinsi</strong>
        {setPropertieString(data.namaProvinsi)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Status Karyawan</strong>
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
