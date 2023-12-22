import { Flex } from "@chakra-ui/react";
import TopContent from './TopContent';
import { useSupply } from '../../../hooks/useSupply';

function Supply () {
  const { supplyContent } = useSupply();
  
  return (
    <Flex
      flexDir={'column'}
      h={'250px'}
      justifyContent={'space-between'}
    >
      <Flex flexDir={'column'}>
        {
          supplyContent.map((content: any, index: number) => {
            return (
              <TopContent {...content} key={index}/>
            )
          })
        }
      </Flex>
    </Flex>
  )
}

export default Supply