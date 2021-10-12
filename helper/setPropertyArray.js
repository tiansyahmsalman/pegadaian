import { Text, Grid } from "@chakra-ui/react";
export default function setPropertyArray(payload) {
  let res
  if (!payload) {
    res = <Text>{'-'}</Text>
  } else {
    res = (
      payload.map((txt, i) => (
          <Grid
            paddingTop="1"
            paddingBottom="1"
            key={i}
          >
            <Text>{txt}</Text>
          </Grid>
        )
      )
    )
  }
  return res
}
