import { Flex } from "@chakra-ui/react";
import TopContent from './TopContent';
import { useBurnt } from '../../../hooks/useBurnt';


function Burnt () {
  // const {totSupply, circulSupply} = useSupply();
  const { burntContent } = useBurnt()
  return (
    <Flex
      flexDir={'column'}
      h={'250px'}
      // justifyContent={'space-between'}
      // alignItems={'space-between'}
    >
      <Flex flexDir={'column'}>
        {
          burntContent.map((content: any, index: number) => {
            return (
              <TopContent {...content} key={index}/>
            )
          })
        }
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