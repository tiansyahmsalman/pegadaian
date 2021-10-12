import React from "react";
import { Flex, Text, Grid } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import setPropertyString from "../helper/setPropertyString";
import setPropertyList from "../helper/setPropertyList";
import setGradeAngsuran from "../helper/setGradeAngsuran";
import setGradeNonAngsuran from "../helper/setGradeNonAngsuran";
import setGradeInvestasi from "../helper/setGradeInvestasi";
import setPropertyArray from "../helper/setPropertyArray";
import getHistory from "../helper/getHistory"
import setLtv from "../helper/setLtv"

export default function Historical(props) {
  const data = props.data;
  const dataHistories = props.dataHistories
  const dataLtv = props.dataLtv
  const [campaigns, setCampaigns] = React.useState();
  const [historyProducts, setHistoryProducts] = React.useState();

  React.useEffect(() => {
    if (dataHistories.length > 0) {
      const {campaignsArr, historyProductsArr} = getHistory(dataHistories)
      if (campaignsArr.length > 0) setCampaigns(campaignsArr);
      if (historyProductsArr.length > 0) setHistoryProducts(historyProductsArr);
    }
  },[])

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
        {setPropertyString(data.encUsia)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Status Pernikahan</strong>
        {setPropertyString(data.encStatusPernikahan)}
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          Produk
        </Text>
      </Flex>
      <Grid
        borderBottom={ dataHistories && dataHistories.length > 0 ? "0px" : "1px"}
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Transaksi yang sudah selesai</strong>
        {setPropertyArray(historyProducts)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Transaksi yang sedang berlangsung</strong>
        {setPropertyList(data.listActiveProducts)}
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
        {setPropertyList(data.listProductRecommendation)}
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
        {setPropertyString(setGradeNonAngsuran(data.segmentInNonAngsuran))}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Produk Angsuran</strong>
        {setPropertyString(setGradeAngsuran(data.segmentInAngsuran))}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Produk Investasi</strong>
        {setPropertyString(setGradeInvestasi(data.segmentInInvestasi))}
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
        {setPropertyString(data.labelClvNonAngsuran)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Prediksi Pengeluaran Nasabah - Produk non Angsuran</strong>
        {setPropertyString(data.predictedClvNonAngsuran)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Tipe Nasabah - Produk Angsuran</strong>
        {setPropertyString(data.labelClvAngsuran)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Prediksi Pengeluaran Nasabah - Produk Angsuran</strong>
        {setPropertyString(data.predictedClvAngsuran)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Tipe Nasabah - Produk Investasi</strong>
        {setPropertyString(data.labelClvInvestasi)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Prediksi Pengeluaran Nasabah - Produk Investasi</strong>
        {setPropertyString(data.predictedClvnvestasi)}
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
        {setPropertyArray(campaigns)}
      </Grid>
      <Flex backgroundColor="blue.50" borderRadius="5" marginBottom="3">
        <InfoIcon boxSize="6" color="purple.900" margin="3" />
        <Text fontSize="1xl" fontWeight="bold" margin="3">
          LTV
        </Text>
      </Flex>
      {setLtv(dataLtv)}
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
        {setPropertyString(data.outlet)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Kode Outlet</strong>
        {setPropertyString(data.kodeOutlet)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Cabang</strong>
        {setPropertyString(data.cabang)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Kode Cabang</strong>
        {setPropertyString(data.kodeCabang)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Kantor Wilayah</strong>
        {setPropertyString(data.kanwil)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Provinsi</strong>
        {setPropertyString(data.namaProvinsi)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Status Karyawan</strong>
        {setPropertyString(data.statusNasabah)}
      </Grid>
      <Grid
        borderBottom="1px"
        borderColor="gray.200"
        paddingTop="3"
        paddingBottom="3"
      >
        <strong>Rating</strong>
        {setPropertyString(data.rating)}
      </Grid>
    </>
  );
}
