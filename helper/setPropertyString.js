import { Text } from "@chakra-ui/react";
export default function setPropertyString(payload) {
  let res = ''
  if (!payload || payload.includes('not ') || payload.includes('Not ')) {
    res = <Text>{'-'}</Text>
  } else {
    res = <Text>{payload}</Text>
  }
  return res
}