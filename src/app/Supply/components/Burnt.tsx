import { Flex } from "@chakra-ui/react";
import TopContent from './TopContent';


function Burnt () {
  // const {totSupply, circulSupply} = useSupply();
  return (
    <Flex
      flexDir={'column'}
      h={'260px'}
      justifyContent={'space-between'}
      // alignItems={'space-between'}
    >
      <Flex flexDir={'column'}>
        <TopContent 
          content={'Vested'}
          tooltip={''}
          value={''}
          link={''}
        />
        <TopContent 
          content={'Burnt'}
          tooltip={''}
          value={''}
          link={''}
        />
        <TopContent 
          content={'Locked in DAO Vault'}
          tooltip={''}
          value={''}
          link={''}
        />
        <TopContent 
          content={'Staked'}
          tooltip={''}
          value={''}
          link={''}
        />
        <TopContent 
          content={'Tonstarter Mining'}
          tooltip={''}
          value={''}
          link={''}
        />
      </Flex>
      <Flex fontSize={'13px'} fontWeight={300} w={'396px'} mb="20px">
        † Contract values for TON supply need to be divided by 10^27 to get correct decimal place. 
      </Flex>
      <Flex fontSize={'13px'} fontWeight={300} w={'396px'} mb="23px">
        †† Contract values need to be divided by 10^18 to get correct decimal place.
      </Flex>
    </Flex>
  )
}

export default Burnt