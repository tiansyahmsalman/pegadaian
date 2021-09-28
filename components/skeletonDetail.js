import React from 'react'
import ContentLoader from 'react-content-loader'
import {
  Box,
  Center
} from '@chakra-ui/react'

export default function MyLoader () {
  return(
    <Center m='5'>
      <Box maxW='850'>
        <ContentLoader
          viewBox="0 0 450 400"
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
        >
          <rect x="0" y="230" rx="4" ry="4" width="360" height="30" />
          <rect x="0" y="270" rx="3" ry="3" width="270" height="10" />
          <rect x="0" y="0" width="500" height="220" />
        </ContentLoader>
      </Box>
    </Center>
  )
}
