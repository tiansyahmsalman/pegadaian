import {
    Flex,
    Text,
    Spacer
  } from '@chakra-ui/react'

export default function NavbarHome() {
    return (
        <Flex backgroundColor={'#5AC421'} pos='sticky' top='0' left='0' >
            <Text fontSize='1xl' fontWeight='bold' margin='4' textColor='white'>Accout</Text>
            <Spacer />
            <svg 
              xmlns='http://www.w3.org/2000/svg' 
              color='white' 
              strokeWidth='0' 
              viewBox='0 0 40 20' 
              fill='currentColor' 
              stroke='currentColor' 
              width='3em' 
              height='3em' 
              focusable='false' 
            >
              <g stroke='currentColor' strokeWidth='1.5'>
              <path strokeLinecap='round' fill='none' d='M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25' />
              <path fill='currentColor' strokeLinecap='round' d='M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0' />
              <circle fill='none' strokeMiterlimit='10' cx='12' cy='12' r='11.25' />
              </g>
            </svg>
        </Flex>
    )
  }
  