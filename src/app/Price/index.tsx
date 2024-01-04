import { Flex } from "@chakra-ui/layout";
import TopContent from "./TopContent";
import { useTONPrice } from '../../hooks/useTONPrice';
import BottomContent from "./BottomContent";
import { useTOSPrice } from '../../hooks/useTOSPrice';
import { useTONTradeInfo } from '../../hooks/useTONTradeInfo';
import { useMediaQuery } from "@chakra-ui/react";

export default function Price () {
  const { tonPriceKRW, tonPriceUSD } = useTONPrice();
  const { tosPriceKRW, tosPriceUSD } = useTOSPrice()
  const { highPrice, lowPrice, openingPrice, closingPrice, USD } = useTONTradeInfo();
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
          usd={openingPrice * USD}
        />
        <BottomContent 
          title={'24H CLOSING PRICE'}
          krw={closingPrice}
          usd={closingPrice * USD}
        />
        <BottomContent 
          title={'24H HIGH PRICE'}
          krw={highPrice}
          usd={highPrice * USD}
        />
        <BottomContent 
          title={'24H LOW PRICE'}
          krw={lowPrice}
          usd={lowPrice * USD}
        />
      </Flex>
    </Flex>
  )
}