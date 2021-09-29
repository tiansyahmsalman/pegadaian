export default function setGrade(payload) {
  const key = '' + payload
  const grade = {
    '0':'Sangat Baik',
    '1':'Buruk',
    '2':'Cukup Baik',
    '3':'Baik',
  }
  return grade[key]
}
