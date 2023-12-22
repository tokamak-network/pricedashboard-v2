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
          supplyContent.map((content: any) => {
            return (
              <TopContent {...content}/>
            )
          })
        }
      </Flex>
    </Flex>
  )
}

export default Supply