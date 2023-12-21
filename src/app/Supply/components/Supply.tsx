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
          tooltip={'The cumulative TON generated until the present Ethereum block, factoring in both burnt TON and unminted TON due to a seigniorage adjustment (Calculation Sheet). Each block produces 3.92 TON as seigniorage.'}
          value={totSupply}
          link={'https://etherscan.io/address/0x0b55a0f463b6defb81c6063973763951712d0e5f#readProxyContract'}
        />
        <TopContent 
          content={'Circulating Supply'}
          tooltip={'The amount of circulating TON derived using the formula : TON Circulating Supply = TON Total Supply - TON locked in vesting- TON locked in DAO Vault - TON Staked '}
          value={circulSupply}
          link={''}
        />
        <TopContent 
          content={'Circulating Supply (Upbit Standard)'}
          tooltip={'Circulating supply calculated based on upbit standard to the date. '}
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
          tooltip={'Pools considered for the calculation:  doc-tos, tos-eth, eth-wton, tos-wton, tos-aura, doc-eth, tos-lyda'}
          value={''}
          link={''}
          type={'usd'}
        />
      </Flex>
    </Flex>
  )
}

export default Supply