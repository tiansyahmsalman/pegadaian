import axios from 'axios'

export default async function getAudience (id) {
  const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID
  const Bearer = `Bearer ${localStorage.getItem('token')}`
  const url = `${basicUrl}/allAudiences/rows/${id}`
  const headers = { 'authorization': Bearer }
  
  try {
    const data = await axios.get(url, {headers})
    return data
  } catch (error) {
    return error.message
  }
}