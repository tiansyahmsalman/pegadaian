import axios from 'axios'

export default async function getDataPoducts () {
  const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID
  const Bearer = `Bearer ${localStorage.getItem('token')}`
  const url = `${basicUrl}/productWithAudienceFilter/rows?limit=50&offset=0&$order=asc`
  const headers = { 'authorization': Bearer }
  
  try {
    const data = await axios.get(url, {headers})
    return data
  } catch (error) {
    return error.message
  }
}