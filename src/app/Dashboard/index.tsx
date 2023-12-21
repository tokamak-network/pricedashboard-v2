import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import Price from "../Price";
import Supply from "../Supply";

export default function Dashboard () {
  const [selected, setSelected] = useState('price');
  
  return (
    <Flex 
      flexDir={'column'} 
      maxW={'100%'} 
      minW={'1440px'}
      justifyContent={'center'} 
      alignItems={'center'}
    >
      <Flex
        flexDir={'row'}
        fontSize={'36px'}
        fontWeight={700}
        fontFamily={'Inter'}
        justifyContent={'start'}
        alignItems={'center'}
        bgColor={'#fff'}
        h={'120px'}
        w={'920px'}
      >
        <Flex
          color={selected === 'price' ? '#333' : '#B2C1D2'}
          cursor={'pointer'}
          onClick={() => setSelected('price')}
        >
          PRICE
        </Flex>
        <Flex 
          width={'2px'}
          height={'54px'}
          bgColor={'#007aff'}
          mx={'12px'}
        />
        <Flex
          color={selected === 'supply' ? '#333' : '#B2C1D2'}
          cursor={'pointer'}
          onClick={() => setSelected('supply')}
        >
          SUPPLY
        </Flex>
      </Flex>
      <Flex 
        pt={'30px'} 
        bgColor={'#F7F8FD'} 
        // maxW={'920px'} 
        w={'100%'}
        h={'880px'} 
        alignItems={'start'}
        justifyContent={'center'}
      >
        {
          selected === 'price' ?
          <Price /> :
          <Supply />
        }
      </Flex>
    </Flex>
  )
}