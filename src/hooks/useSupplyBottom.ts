import { useState, useEffect } from 'react';
import { 
  getCirculationSupply
} from '@/api'
import { useTONPrice } from './useTONPrice';

type SupplyValueProps = {
  title: string;
  tooltip: string;
  value: string | number;
  dollor?: number | string
}

export function useSupplyBottom () {
  const [circulSupply, setCirculSupply] = useState<SupplyValueProps[]>([
    {
      title: "C1",
      tooltip: "A supply measure that indicates TON that is immediately accessible for conversion to cash without any restrictions from staking, vesting, or DAO constraints. C1=  TON Total Supply - TON locked in vesting - TON locked in DAO Vault - TON Staked ",
      value: 0,
      dollor: 0,
    },
    {
      title: "C2",
      tooltip: "A supply measure considering short term locked TON(< 3 months).This supply metric considers staked (excluding TONStarter Staking) and vested TON, excluding DAO-locked TON, which remains locked indefinitely. Formula = C1+ TON Staked + TON Locked in Vesting - TONStarter staked TON",
      value: 0,
      dollor: 0,
    },
    {
      title: "C3",
      tooltip: "A supply measure considering a relatively long term locked TON (<1 year)  than C2. On 15 July 2024, both C3 and C2 becomes equal since it marks the end of TONStarter staking. Formula = C2 + TONStarter staked TON",
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
          tooltip: "The cumulative TON generated until the present Ethereum block, factoring in both burnt TON and unminted TON due to a seigniorage adjustment. Each block produces 3.92 TON as seigniorage.",
          value: C1,
          dollor: C1 * tonPriceUSD,
        },
        {
          title: "C2",
          tooltip: "The amount of circulating TON derived using the formula : TON Circulating Supply = TON Total Supply - TON locked in vesting- TON locked in DAO Vault - TON Staked ",
          value: C1 + C2,
          dollor: (C1 + C2) * tonPriceUSD,
        },
        {
          title: "C3",
          tooltip: "Circulating supply calculated based on upbit standard to the date. ",
          value: C1 + C2 + C3,
          dollor: (C1 + C2 + C3) * tonPriceUSD,
        },
      ])
    }
    fetch()
  }, [tonPriceUSD])
  
  return { 
    circulSupply
  };
}