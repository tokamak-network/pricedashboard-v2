import { Flex } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/react";
import { useTONPrice } from '../../hooks/useTONPrice';
import { useTOSPrice } from '../../hooks/useTOSPrice';
import BottomContent from "./BottomContent";
import TopContent from "./TopContent";

export default function Price () {
  const { tonPriceKRW, tonPriceUSD, highPrice, lowPrice, openingPrice, closingPrice, krwPrice } = useTONPrice();
  const { tosPriceKRW, tosPriceUSD } = useTOSPrice()
  const [isMobile] = useMediaQuery("(max-width: 920px)");
 
  return (
    <Flex flexDir={'column'} maxW={'920px'} justifyContent={'center'} alignItems={'center'}>
      <Flex flexDir={isMobile ? 'column' : 'row'} justifyContent={'space-between'} w={isMobile ? '100%' : '920px'}>
        <TopContent 
          krw={tonPriceKRW}
          usd={tonPriceUSD}
          type={'ton'}
        />
        <TopContent 
          krw={tosPriceKRW}
          usd={tosPriceUSD}
          type={'tos'}
        />
      </Flex>
      <Flex flexDir={isMobile ? 'column' : 'row'} justifyContent={'space-between'} w={'100%'}>
        <BottomContent 
          title={'24H OPENING PRICE'}
          krw={openingPrice}
          usd={openingPrice * krwPrice}
        />
        <BottomContent 
          title={'24H CLOSING PRICE'}
          krw={closingPrice}
          usd={closingPrice * krwPrice}
        />
        <BottomContent 
          title={'24H HIGH PRICE'}
          krw={highPrice}
          usd={highPrice * krwPrice}
        />
        <BottomContent 
          title={'24H LOW PRICE'}
          krw={lowPrice}
          usd={lowPrice * krwPrice}
        />
      </Flex>
    </Flex>
  )
}