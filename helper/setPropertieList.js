import { Text, Grid } from "@chakra-ui/react";
export default function setPropertieList(payload) {
  let res = ''
  if (!payload || payload.includes('not ') || payload.includes('Not ')) {
    res = <Text>{'-'}</Text>
  } else {
    res = (
      payload.split("/").map((obj, i) => (
          <Grid
            paddingTop="1"
            paddingBottom="1"
            key={i}
          >
            <Text>{obj}</Text>
          </Grid>
        ))
      )
  }
  return res
}
