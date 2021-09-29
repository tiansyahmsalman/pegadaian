export default function setGrade(payload) {
  const key = '' + payload
  const grade = {
    '0':'Cukup Baik',
    '1':'Baik',
    '2':'Buruk',
    '3':'Sangat Baik',
  }
  return grade[key]
}
