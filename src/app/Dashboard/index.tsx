import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import Price from "../Price";
import Supply from "../Supply";
import { Link, useMediaQuery } from "@chakra-ui/react";
import DUNE_LOGO from '@/assets/dune-logo.png'
import DUNE from '@/assets/dune.png'
import Image from "next/image";
import LINK_ICON from '@/assets/foreign.svg'



export default function Dashboard () {
  const [selected, setSelected] = useState('price');
  const [isMobile] = useMediaQuery("(max-width: 920px)");
  
  return (
    <Flex 
      flexDir={'column'} 
      w={'100vw'}
      justifyContent={'center'} 
      alignItems={'center'}
    >
      <Flex
        flexDir={'row'}
        fontSize={isMobile ? '24px' : '30px'}
        fontWeight={600}
        justifyContent={isMobile ? 'center' : 'start'}
        alignItems={'center'}
        bgColor={'#fff'}
        h={'120px'}
        w={isMobile ? '100%' : '920px'}
      >
        <Flex
          color={selected === 'price' ? '#333' : '#B2C1D2'}
          cursor={'pointer'}
          onClick={() => setSelected('price')}
          _hover={{
            color: '#333'
          }}
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
          _hover={{
            color: '#333'
          }}
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
        justifyContent={selected === 'price' && !isMobile ? 'center' :'start'}
        flexDir={selected === 'price' && !isMobile ? 'row' : 'column'}
      >
        {
          selected === 'price' ?
          <Price /> :
          <Supply />
        }
        <Flex 
          mt={isMobile ? '40px' : selected === 'price' ? '100px' : '84px'} 
          ml={selected === 'price' && !isMobile ? '20px' : ''}
          flexDir={isMobile ? 'column' :'row'} 
          fontSize={'20px'} 
          mb={'100px'}
          w={isMobile ? '330px' : selected === 'price' ? '463px' : '920px'}
          h={isMobile ? '200px' : selected === 'price' ? '296px' : '261px'}
          justifyContent={'center'}
          alignItems={'center'}
          borderRadius={'8px'}
          bgColor={'rgba(233, 236, 251, 0.8)'}
          backdropFilter={'blur(10px)'}
        >
          <Flex
            bgSize={920}
            zIndex={1}
            justifyContent={'center'} 
            flexDir={isMobile ? 'column' : 'row'}  
            alignItems={'center'}
            px={selected === 'price' && !isMobile ? '50px' : ''}
          >
            <Flex 
              opacity={0.1} 
              backdropFilter={'blur(10px)'}
              position={'absolute'}
              w={isMobile ? '330px' : selected === 'price' ? '463px' : '920px'}
              h={isMobile ? '200px' : '261px'}
              bgImage={"url('./dune.png')"} 
              bgPosition={'center; *strikethrough*'}
              bgSize={selected === 'price' ? 463 : 920 }
            />
            <Flex 
              position={selected === 'price' && !isMobile ? 'absolute' : 'relative'}
              top={selected === 'price' && !isMobile ? '123px' : ''}
              left={selected === 'price' && !isMobile ?'85px' : ''}
              mb={'5px'}
            >
              <Image src={DUNE_LOGO} alt={''} width={25} />
            </Flex>
            <Flex 
              mx={selected === 'price' && !isMobile ? '40px' : '10px'} 
              fontWeight={600} 
              textAlign={selected === 'price' && !isMobile ? 'left' : 'center'} 
              opacity={1}
              ml={selected === 'price' && !isMobile ? '70px' : ''}
              flexDir={isMobile ? 'column' : 'row'}
              alignItems={'center'}
            >
              Dune - Tokamak Network Tokenomics Dashboard
              <Link 
                href={'https://dune.com/tokamak-network/tokamak-network-tokenomics-dashboard'}
                rel="noopener noreferrer" target="_blank"
                position={selected === 'price' && !isMobile ? 'absolute': 'relative'}
                top={selected === 'price' && !isMobile ? '146px' : ''}
                right={selected === 'price' && !isMobile ? '98px': ''}
                ml={'5px'}
              >
                <Image src={LINK_ICON} alt="" />
              </Link>
            </Flex>
            
          </Flex>
        </Flex>
      </Flex>
      
    </Flex>
  )
}