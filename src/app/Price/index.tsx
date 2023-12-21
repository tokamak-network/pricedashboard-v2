import { Flex } from "@chakra-ui/layout";
import { useSupply } from '../../hooks/useSupply';
import TopContent from "./TopContent";
import { useTONPrice } from '../../hooks/useTONPrice';
import BottomContent from "./BottomContent";

export default function Price () {
  // const data = useSupply(); 
  const {tonPriceKRW, tonPriceUSD} = useTONPrice();
 
  return (
    <Flex flexDir={'column'} maxW={'920px'} justifyContent={'center'} alignItems={'center'}>
      <Flex flexDir={'row'} justifyContent={'space-between'} minW={'920px'}>
        <TopContent 
          krw={tonPriceKRW}
          usd={tonPriceUSD}
          type={'ton'}
        />
        <TopContent 
          krw={''}
          usd={''}
          type={'tos'}
        />
      </Flex>
      <Flex flexDir={'row'} justifyContent={'space-between'} minW={'920px'}>
        <BottomContent 
          title={'OPENING PRICE'}
          krw={0}
          usd={0}
        />
        <BottomContent 
          title={'CLOSING PRICE'}
          krw={0}
          usd={0}
        />
        <BottomContent 
          title={'HIGH PRICE'}
          krw={0}
          usd={0}
        />
        <BottomContent 
          title={'LOW PRICE'}
          krw={0}
          usd={0}
        />
      </Flex>
      <Flex mt={'124px'} flexDir={'row'} fontSize={'20px'}>
        <Flex fontWeight={300} mr={'5px'}>
          Dune Dashboard:
        </Flex>
        <Flex fontWeight={600}>
          Coming Soon !!
        </Flex>
      </Flex>
    </Flex>
  )
}