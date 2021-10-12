import { Text, } from "@chakra-ui/react";
import Ltv from "../components/ltv"

export default function setLtv(payload) {
  let res
  if (!payload || payload.length < 1) {
    res = <strong>{'-'}</strong>
  } else {
    res = payload.map((data, i) => (<Ltv data={data} key={i}/>))
  }
  return res
}
