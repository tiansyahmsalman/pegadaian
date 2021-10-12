export default function setPropertyArray(payload) {
  let campaignsArr = []
  let historyProductsArr = []

  for (let i = 0; i < payload.length ; i++) {
    if (payload[i].properties_aixp_campaign_name !== '') {
      campaignsArr.push(payload[i].properties_aixp_campaign_name)
    }
    if (payload[i].properties_jenis_transaksi !== '') {
      historyProductsArr.push(`${payload[i].properties_tgl_transaksi} - ${payload[i].properties_nama_produk} - ${payload[i].properties_jenis_transaksi}`)
    }
  }
  return {campaignsArr, historyProductsArr}
}
