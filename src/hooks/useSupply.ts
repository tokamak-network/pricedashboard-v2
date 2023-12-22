import { useState, useEffect } from 'react';
import { 
  getTotalSupply, 
  getCirculateSupply,
  getCirculationSupply,
  getTVL
} from '@/api'
import { useTONPrice } from './useTONPrice';

type SupplyValueProps = {
  content: string;
  tooltip: string;
  value: string | number;
  link?: string
  type?: string
  span?: string
}

export function useSupply () {

  const [supplyContent, setSupplyContent] = useState<SupplyValueProps[]>([
    {
      content: "Total Supply*",
      tooltip: "The cumulative TON generated until the present Ethereum block, factoring in both burnt TON and unminted TON due to a seigniorage adjustment. Each block produces 3.92 TON as seigniorage.",
      value: "- ",
      link: "https://etherscan.io/address/0x0b55a0f463b6defb81c6063973763951712d0e5f#readProxyContract",
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
      tooltip: "Pools considered for the calculation:  doc-tos, tos-eth, eth-wton, tos-wton, tos-aura, doc-eth, tos-lyda",
      value: "",
      link: "",
      type: "usd"
    },
  ])
  const { tonPriceUSD } = useTONPrice();

  useEffect(() => {
    async function fetch() {
      const totalSupply = await getTotalSupply();
      const circulatedSupply = await getCirculateSupply();
      const circulation = await getCirculationSupply();
      const tvl = await getTVL();
      
      setSupplyContent([
        {
          content: "Total Supply*",
          tooltip: "The cumulative TON generated until the present Ethereum block, factoring in both burnt TON and unminted TON due to a seigniorage adjustment. Each block produces 3.92 TON as seigniorage.",
          value: totalSupply,
          link: "https://etherscan.io/address/0x0b55a0f463b6defb81c6063973763951712d0e5f#readProxyContract",
        },
        {
          content: "Circulating Supply",
          tooltip: "The amount of circulating TON derived using the formula : TON Circulating Supply = TON Total Supply - TON locked in vesting- TON locked in DAO Vault - TON Staked ",
          value: circulatedSupply,
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
          tooltip: "Pools considered for the calculation:  doc-tos, tos-eth, eth-wton, tos-wton, tos-aura, doc-eth, tos-lyda",
          value: tvl,
          link: "",
          type: "usd"
        },
      ])
    }
    fetch()
  }, [tonPriceUSD])
  return { 
    supplyContent
  };
}