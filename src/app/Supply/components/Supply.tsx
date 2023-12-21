import { Flex } from "@chakra-ui/react";
import TopContent from './TopContent';
import { useSupply } from '../../../hooks/useSupply';
import { useTONPrice } from '../../../hooks/useTONPrice';
import Link from "next/link";

function Supply () {
  const {totSupply, circulSupply, circul} = useSupply();
  const { tonPriceUSD } = useTONPrice();
  // console.log(tonPrice)
  //@ts-ignore
  const { totalCirculationSupply } = circul
  return (
    <Flex
      flexDir={'column'}
      h={'250px'}
      justifyContent={'space-between'}
    >
      <Flex flexDir={'column'}>
        <TopContent 
          content={'Total Supply*'}
          tooltip={''}
          value={totSupply}
          link={''}
        />
        <TopContent 
          content={'Circulating Supply'}
          tooltip={''}
          value={circulSupply}
          link={''}
        />
        <TopContent 
          content={'Circulating Supply (Upbit Standard)'}
          tooltip={''}
          value={totalCirculationSupply}
          link={''}
        />
        <TopContent 
          content={'Market Cap'}
          tooltip={''}
          value={+circulSupply * tonPriceUSD}
          link={''}
          type={'usd'}
        />
        <TopContent 
          content={'FDV'}
          tooltip={''}
          value={+totSupply * tonPriceUSD}
          link={''}
          type={'usd'}
        />
        <TopContent 
          content={'Uniswap TVL'}
          tooltip={''}
          value={''}
          link={''}
          type={'usd'}
        />
      </Flex>
    </Flex>
  )
}

export default Supply