export default function convertDateTime(payload) {
  if (!payload || payload.includes('not ') || payload.includes('Not ')) {
    return payload;
  } else {
    const date = new Date(payload).toISOString().split('T')
    const time = date[1].split('.')[0]
    return `${date[0]} ${time}`
  }
}
