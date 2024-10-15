import { useState, useEffect } from 'react';
import { Link } from '@chakra-ui/react'
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
  types? : string
}

export function useValuation () {

  const [valuationContent, setValuationContent] = useState<SupplyValueProps[]>([
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
  ])
  const { tonPriceUSD } = useTONPrice();

  useEffect(() => {
    async function fetch() {
      const totalSupply = await getTotalSupply();
      const circulatedSupply = await getCirculateSupply();

      setValuationContent([
        {
          content: "Market Cap",
          tooltip: "Market Cap = Circulating Supply * Price Per TON",
          value: +circulatedSupply * tonPriceUSD,
          link: "",
          type: 'usd'
        },
        {
          content: "Fully Diluted Valuation",
          tooltip: "Fully Diluted Valuation = Total Supply * Price per TON",
          value: +totalSupply * tonPriceUSD,
          link: "",
          type: "usd"
        },
      ])
    }
    fetch()
  }, [tonPriceUSD])
  return { 
    valuationContent
  };
}