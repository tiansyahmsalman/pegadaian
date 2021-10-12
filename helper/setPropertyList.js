import { Text, Grid } from "@chakra-ui/react";
export default function setPropertyList(payload) {
  let res = ''
  if (!payload || payload.includes('not ') || payload.includes('Not ') || !payload.includes) {
    res = <Text>{'-'}</Text>
  } else {
    res = (
      payload.split(",").map((txt, i) => (
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
