import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import Price from "../Price";
import Supply from "../Supply";


export default function Dashboard () {
  const [selected, setSelected] = useState('price');
  
  return (
    <Flex 
      flexDir={'column'} 
      w={'100vw'}
      justifyContent={'center'} 
      alignItems={'center'}
    >
      <Flex
        flexDir={'row'}
        fontSize={'30px'}
        fontWeight={600}
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
        minH={'610px'} 
        alignItems={'center'}
        justifyContent={'start'}
        flexDir={'column'}
      >
        {
          selected === 'price' ?
          <Price /> :
          <Supply />
        }
        <Flex mt={selected === 'price' ? '124px' : '64px'} flexDir={'row'} fontSize={'20px'} mb={'100px'}>
          <Flex fontWeight={300} mr={'5px'}>
            Dune Dashboard:
          </Flex>
          <Flex fontWeight={600}>
            Coming Soon !!
          </Flex>
        </Flex>
      </Flex>
      
    </Flex>
  )
}