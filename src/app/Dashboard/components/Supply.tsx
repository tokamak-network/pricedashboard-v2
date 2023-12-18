import { Flex } from "@chakra-ui/react";
import TopContent from './TopContent';
import { useSupply } from '../../../hooks/useSupply';
import { useTONPrice } from '../../../hooks/useTONPrice';

function Supply () {
  const {totSupply, circulSupply, circul} = useSupply();
  const { tonPrice } = useTONPrice();
  console.log(tonPrice)
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
          value={+circulSupply * tonPrice}
          link={''}
          type={'usd'}
        />
        <TopContent 
          content={'FDV'}
          tooltip={''}
          value={+totSupply * tonPrice}
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
      <Flex fontSize={'13px'} fontWeight={300} w={'396px'} mb="26px">
        *Contract values for TON supply need to be divided by 10^27 to get correct decimal place.
      </Flex>
    </Flex>
  )
}

export default Supply