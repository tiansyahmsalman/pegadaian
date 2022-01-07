export default function convertDateTime(payload) {
  if (!payload || payload.includes('not ') || payload.includes('Not ') || payload.includes('-')) {
    return payload;
  } else {
   try {
    const date = new Date(payload).toISOString().split('T')
    const time = date[1].split('.')[0]
    return `${date[0]} ${time}`
   } catch (error) {
     return new Date;
   }
  }
}
