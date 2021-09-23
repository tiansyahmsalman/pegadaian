import axios from 'axios'

export default async function login (email, password) {
  const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID
  const url = `${basicUrl}/authenticate/password`
  const body = {
    'identifier': email,
    'password': password
  }

  try {
    const data = await axios.post(url, body)
    return data
  } catch (error) {
    return error.message
  }
}