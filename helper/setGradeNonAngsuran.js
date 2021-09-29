export default function setGrade(payload) {
  const key = '' + payload
  const grade = {
    '0':'Cukup Baik',
    '1':'Sangat Baik',
    '2':'Buruk',
    '3':'Baik',
  }
  return grade[key]
}
