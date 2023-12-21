import { Flex } from "@chakra-ui/layout";
import TopContent from "./TopContent";
import { useTONPrice } from '../../hooks/useTONPrice';
import BottomContent from "./BottomContent";
import { useTOSPrice } from '../../hooks/useTOSPrice';
import { useTONTradeInfo } from '../../hooks/useTONTradeInfo';

export default function Price () {
  const { tonPriceKRW, tonPriceUSD } = useTONPrice();
  const { tosPriceKRW, tosPriceUSD } = useTOSPrice()
  const { highPrice, lowPrice, openingPrice, closingPrice, USD } = useTONTradeInfo();
 
  return (
    <Flex flexDir={'column'} maxW={'920px'} justifyContent={'center'} alignItems={'center'}>
      <Flex flexDir={'row'} justifyContent={'space-between'} minW={'920px'}>
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
      <Flex flexDir={'row'} justifyContent={'space-between'} minW={'920px'}>
        <BottomContent 
          title={'OPENING PRICE'}
          krw={openingPrice}
          usd={openingPrice * USD}
        />
        <BottomContent 
          title={'CLOSING PRICE'}
          krw={closingPrice}
          usd={closingPrice * USD}
        />
        <BottomContent 
          title={'HIGH PRICE'}
          krw={highPrice}
          usd={highPrice * USD}
        />
        <BottomContent 
          title={'LOW PRICE'}
          krw={lowPrice}
          usd={lowPrice * USD}
        />
      </Flex>
    </Flex>
  )
}