import { Flex, Link, Text, Tooltip } from "@chakra-ui/react";
import LOGO from '@/assets/Tokamak_transparent.png'
import Image from 'next/image'
import '@fontsource/poppins';

export default function Header() {
  return (
    <Flex
      w={'100%'}
      // maxW={'1440px'}
      // minW={''}
      h={'80px'}
      bg={'#fff'}
      color={'#1c1c1c'}
      fontSize={'16px'}
      fontWeight={600}
      justifyContent={'center'}
      // alignItems={'center'}
      flexDir={'row'}
    >
      <Flex
        ml={'11px'}
        justifyContent={'start'}
        alignItems={'center'}
        minW={'920px'}
      >
        <Image width={40} src={LOGO} alt="" />
        <Flex
          fontSize={'24px'}
          fontFamily={'Helvetica, sans-serif'}
          fontWeight={'bold'}
          ml={'3px'}
          flexDir={'row'}
          alignItems={'center'}
        >
          Tokamak Network 
          <Flex 
            ml={'10px'}
            color={'#2a72e5'}
            fontWeight={600}
            fontFamily={'Poppins, sans-serif'}
          >
            price dashboard
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        fontSize={'16px'}
        color="#1c1c1c"
      >
       
        
        {/* <Tooltip 
          label={'Coming soon!'} 
          placement={'auto'}
          hasArrow arrowSize={15}
          bgColor={'#1C1C1C'}
          color={'#fff'}
          padding={'5px'}
          borderRadius={"3px"}
        >
          <Text
            color={'#1C1C1C80'}
            cursor={'pointer'}
          >
            Dune Dashboard
          </Text>
        </Tooltip> */}
      </Flex>
    </Flex>
  )
}