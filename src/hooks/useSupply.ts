import { useState, useEffect } from 'react';
import { 
  getTotalSupply, 
  getCirculateSupply,
  getCirculationSupply,
  getTVL,
  getSupply
} from '@/api'
import { useTONPrice } from './useTONPrice';

type SupplyValueProps = {
  content: string;
  tooltip: string;
  tooltip2?: string;
  value: string | number;
  link?: string
  type?: string
  span?: string
}

export function useSupply () {

  const [supplyContent, setSupplyContent] = useState<SupplyValueProps[]>([
    {
      content: "Total Supply",
      tooltip: "The cumulative TON generated until the present ETHereum block, factoring in both burnt TON and unminted TON due to a seigniorage adjustment. Each block produces 3.92 TON as seigniorage.",
      value: "- ",
      link: "https://ETHerscan.io/address/0x0b55a0f463b6defb81c6063973763951712d0e5f#readProxyContract",
      span: '†'
    },
    {
      content: "Circulating Supply",
      tooltip: "The amount of circulating TON derived using the formula : TON Circulating Supply = TON Total Supply - TON locked in vesting- TON locked in DAO Vault - TON Staked ",
      value: "",
      link: "",
    },
    {
      content: "Circulating Supply (Upbit Standard)",
      tooltip: "Circulating supply calculated based on upbit standard to the date. ",
      value: "",
      link: "",
    },
    {
      content: "Market Cap",
      tooltip: "",
      value: "",
      link: "",
      type: 'usd'
    },
    {
      content: "FDV",
      tooltip: "",
      value: "",
      link: "",
      type: "usd"
    },
    {
      content: "Uniswap TVL",
      tooltip: "Pools considered for the calculation:  DOC-TOS, TOS-ETH, ETH-WTON, TOS-WTON, TOS-AURA, DOC-ETH, TOS-LYDA",
      value: "",
      link: "",
      type: "usd"
    },
    {
      content: "Burned",
      tooltip: "The total TON that has been burned to date.",
      value: '',
      link: "https://ETHerscan.io/token/0x2be5e8c109e2197D077D13A82dAead6a9b3433C5?a=0x0000000000000000000000000000000000000001",
      span: '††'
    },
  ])
  const { tonPriceUSD } = useTONPrice();

  useEffect(() => {
    async function fetch() {
      const totalSupply = await getTotalSupply();
      const circulatedSupply = await getCirculateSupply();
      const circulation = await getCirculationSupply();
      const tvl = await getTVL();
      const supply = await getSupply();
      
      setSupplyContent([
        {
          content: "Total Supply",
          tooltip: "The cumulative TON generated until the present ETHereum block, factoring in both burnt TON and unminted TON due to a seigniorage adjustment. Each block produces 3.92 TON as seigniorage.",
          value: totalSupply,
          link: "https://ETHerscan.io/address/0x0b55a0f463b6defb81c6063973763951712d0e5f#readProxyContract#F64",
          span: '†'
        },
        {
          content: "Circulating Supply",
          tooltip: "TON Circulating Supply = TON Total Supply - TON locked in vesting- TON locked in DAO Vault - TON Staked",
          tooltip2: "The amount of circulating TON in the market",
          value: circulation.C1,
          link: "",
        },
        {
          content: "Circulating Supply (Upbit Standard)",
          tooltip: "Circulating supply calculated based on upbit standard to the date. ",
          value: circulation.totalCirculationSupply,
          link: "",
        },
        {
          content: "Market Cap",
          tooltip: "",
          value: +circulatedSupply * tonPriceUSD,
          link: "",
          type: 'usd'
        },
        {
          content: "FDV",
          tooltip: "",
          value: +totalSupply * tonPriceUSD,
          link: "",
          type: "usd"
        },
        {
          content: "Uniswap TVL",
          tooltip: "Pools considered for the calculation:  DOC-TOS, TOS-ETH, ETH-WTON, TOS-WTON, TOS-AURA, DOC-ETH, TOS-LYDA",
          value: tvl,
          link: "",
          type: "usd"
        },
        {
          content: "Burned",
          tooltip: "The total TON that has been burned to date.",
          value: supply.burnedValue,
          link: "https://etherscan.io/token/0x2be5e8c109e2197D077D13A82dAead6a9b3433C5?a=0x0000000000000000000000000000000000000001",
          span: '††'
        },
      ])
    }
    fetch()
  }, [tonPriceUSD])
  return { 
    supplyContent
  };
}