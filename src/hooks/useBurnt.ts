import { useState, useEffect } from 'react';
import { 
  getSupply,
  getTotalStaked,
} from '@/api'

type BurntValueProps = {
  content: string;
  tooltip: string;
  value: string | number;
  link?: string
  type?: string
  span?: string
}

export function useBurnt () {
  const [burntContent, setBurntContent] = useState<BurntValueProps[]>([
    {
      content: "Locked in DAO Vault",
      tooltip: "TON securely held within the DAO vault for an indefinite period.",
      value: '',
      link: "https://etherscan.io/token/0x2be5e8c109e2197D077D13A82dAead6a9b3433C5?a=0x2520CD65BAa2cEEe9E6Ad6EBD3F45490C42dd303",
      span: '††'
    },
    {
      content: "Staked",
      tooltip: "The total TON currently staked in staking contracts.",
      value: '' ,
      link: "https://etherscan.io/address/0x0b55a0f463b6defb81c6063973763951712d0e5f#readProxyContract#F59",
      span: '†'
    },
    {
      content: "Vested",
      tooltip: "The number represents the amount of TON still under vesting. More details can be found in the vesting schedule which outlines allocations for different entities. Vesting ends on 26 Dec 2023(<Block Number>).",
      value: '',
      link: "https://etherscan.io/address/0x0b55a0f463b6defb81c6063973763951712d0e5f#readProxyContract",
      span: '††'
    },
    // {
    //   content: "Tonstarter Mining",
    //   tooltip: "TON staked in TONStarter mining contract",
    //   value: '' ,
    //   link: "https://etherscan.io/address/0x9a8294566960ab244d78d266ffe0f284cdf728f1",
    //   span: '†'
    // },
  ])

  useEffect(() => {
    async function fetch() {
      // const stakedData = await getStakedData();
      const totalStaked = await getTotalStaked();
      const supply = await getSupply();
      
      setBurntContent([
        {
          content: "DAO Vault",
          tooltip: "TON securely held within the DAO vault for an indefinite period.",
          value: supply.daoValue,
          link: "https://etherscan.io/token/0x2be5e8c109e2197D077D13A82dAead6a9b3433C5?a=0x2520CD65BAa2cEEe9E6Ad6EBD3F45490C42dd303",
          span: '††'
        },
        {
          content: "Staked",
          tooltip: "The total TON currently staked in staking contracts.",
          value: totalStaked ,
          link: "https://etherscan.io/address/0x0b55a0f463b6defb81c6063973763951712d0e5f#readProxyContract#F59",
          span: '†'
        },
        {
          content: "Vested",
          tooltip: "The number indicates the amount of TON undergoing vesting. For more specifics on allocations among different entities, refer to the raw data sheet. All vesting concluded on December 26, 2023, at 5:00:00 AM GMT+09:00.",
          value: supply.vestingAmount,
          link: "https://onther.notion.site/Vesting-Contract-Information-2dae61046b38492f829eeccb4922a43f",
          span: '††'
        },
        // {
        //   content: "Tonstarter Mining",
        //   tooltip: "TON staked in TONStarter mining contract",
        //   value: stakedData ,
        //   link: "https://etherscan.io/address/0x9a8294566960ab244d78d266ffe0f284cdf728f1",
        //   span: '†'
        // },
      ])
      
    }
    fetch()
  }, [])
  return { 
    burntContent
  };
}