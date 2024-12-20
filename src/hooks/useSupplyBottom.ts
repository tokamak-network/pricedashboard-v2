import { useState, useEffect } from 'react';
import { 
  getCirculationSupply
} from '@/api'
import { useTONPrice } from './useTONPrice';

type SupplyValueProps = {
  title: string;
  tooltip: string;
  tooltip2?: string;
  value: string | number;
  dollor?: number | string
}

export function useSupplyBottom () {
  const [circulSupply, setCirculSupply] = useState<SupplyValueProps[]>([
    {
      title: "C1",
      tooltip: "A supply metric representing the TON that is immediately available for conversion to cash. Please note that TON from TONStarter mining (which has ended), TON in vesting (now complete), and TON locked indefinitely in the DAO Vault are excluded from the C1 calculation.",
      value: 0,
      dollor: 0,
    },
    {
      title: "C2",
      tooltip: "A supply metric focused on TON locked for the short term (less than 3 months), which considers staked TON.",
      value: 0,
      dollor: 0,
    },
    {
      title: "C3",
      tooltip: "A supply measure considering a relatively long term (greater than 1 year)  locked TON. ",
      value: 0,
      dollor: 0,
    },
  ])
  const { tonPriceUSD } = useTONPrice();

  useEffect(() => {
    async function fetch() {
      const circulation = await getCirculationSupply();
      const { C1, C2, C3 } = circulation

      setCirculSupply([
        {
          title: "C1",
          tooltip: "C1 = Total Supply - DAO Vault - Staked - Vested",
          tooltip2: "A supply metric representing the TON that is immediately available for conversion to cash. Please note that TON from TONStarter mining (which has ended), TON in vesting (now complete), and TON locked indefinitely in the DAO Vault are excluded from the C1 calculation.",
          value: C1,
          dollor: C1 * tonPriceUSD,
        },
        {
          title: "C2",
          tooltip: "C2 = C1 + Staked TON",
          tooltip2: "A supply metric focused on TON locked for the short term (less than 3 months), which considers staked TON.",
          value: C1 + C2,
          dollor: (C1 + C2) * tonPriceUSD,
        },
        {
          title: "C3",
          tooltip: "C3 = C2",
          tooltip2: "A supply measure considering a relatively long term (greater than 1 year)  locked TON.",
          value: C1 + C2,
          dollor: (C1 + C2) * tonPriceUSD,
          // value: circulation.totalCirculationSupply,
          // dollor: (circulation.totalCirculationSupply) * tonPriceUSD,
        },
      ])
    }
    fetch()
  }, [tonPriceUSD])
  
  return { 
    circulSupply
  };
}