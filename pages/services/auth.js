import axios from 'axios'

export default async function auth () {
  const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID
  const Bearer = `Bearer ${localStorage.getItem('token')}`
  const url = `${basicUrl}/me`
  const headers = { 'authorization': Bearer }
  
  try {
    const data = await axios.get(url, {headers})
    return data
  } catch (error) {
    return error.message
  }
}