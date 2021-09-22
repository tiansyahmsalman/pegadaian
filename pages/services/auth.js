import axios from 'axios'

export default async function auth () {
  const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID
  const apiKey = process.env.API_KEY
  const url = `${basicUrl}/me`
  const headers = { 'x-api-key': apiKey }

  try {
    const data = await axios.get(url, {headers})
    return data
  } catch (error) {
    return error.message
  }
}