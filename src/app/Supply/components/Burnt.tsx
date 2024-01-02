import { Flex, useMediaQuery } from "@chakra-ui/react";
import TopContent from './TopContent';
import { useBurnt } from '../../../hooks/useBurnt';

function Burnt () {
  const { burntContent } = useBurnt()
  const [isMobile] = useMediaQuery("(max-width: 920px)");
  
  return (
    <Flex
      flexDir={'column'}
      // h={'54px'}
      // justifyContent={'space-between'}
      // alignItems={'space-between'}
      // w={isMobile ? '330px' : ''}
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
    </Flex>
  )
}

export default Burnt