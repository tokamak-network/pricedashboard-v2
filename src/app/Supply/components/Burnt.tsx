import { Flex } from "@chakra-ui/react";
import TopContent from './TopContent';


function Burnt () {
  // const {totSupply, circulSupply} = useSupply();
  return (
    <Flex
      flexDir={'column'}
      h={'250px'}
      // justifyContent={'space-between'}
      // alignItems={'space-between'}
    >
      <Flex flexDir={'column'}>
        <TopContent 
          content={'Vested'}
          tooltip={'The number represents the amount of TON still under vesting. More details can be found in the vesting schedule which outlines allocations for different entities. Vesting ends on 26 Dec 2023(<Block Number>).'}
          value={''}
          link={'https://onther.notion.site/Vesting-Contract-Information-2dae61046b38492f829eeccb4922a43f?pvs=4'}
        />
        <TopContent 
          content={'Burnt'}
          tooltip={'The total TON that has been burned to date.'}
          value={''}
          link={'https://etherscan.io/token/0x2be5e8c109e2197D077D13A82dAead6a9b3433C5?a=0x0000000000000000000000000000000000000001'}
        />
        <TopContent 
          content={'Locked in DAO Vault'}
          tooltip={'TON securely held within the DAO vault for an indefinite period.'}
          value={''}
          link={'https://etherscan.io/token/0x2be5e8c109e2197D077D13A82dAead6a9b3433C5?a=0x2520CD65BAa2cEEe9E6Ad6EBD3F45490C42dd303'}
        />
        <TopContent 
          content={'Staked'}
          tooltip={'The total TON currently staked in staking contracts.'}
          value={''}
          link={'https://etherscan.io/address/0x0b55a0f463b6defb81c6063973763951712d0e5f#readProxyContract#F59'}
        />
        <TopContent 
          content={'Tonstarter Mining'}
          tooltip={'TON staked in TONStarter mining contract'}
          value={''}
          link={'https://etherscan.io/address/0x9a8294566960ab244d78d266ffe0f284cdf728f1'}
        />
      </Flex>
      <Flex fontSize={'13px'} fontWeight={300} w={'396px'} mb="15px">
        † Contract values need to be divided by 10^27 to get correct decimal place.
      </Flex>
      <Flex fontSize={'13px'} fontWeight={300} w={'396px'} mb="23px">
        †† Contract values need to be divided by 10^18 to get correct decimal place.
      </Flex>
    </Flex>
  )
}

export default Burnt