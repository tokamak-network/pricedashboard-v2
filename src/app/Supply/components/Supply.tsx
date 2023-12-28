import { Flex, Link, useMediaQuery } from "@chakra-ui/react";
import TopContent from './TopContent';
import { useSupply } from '../../../hooks/useSupply';

function Supply () {
  const { supplyContent } = useSupply();
  const [isMobile] = useMediaQuery("(max-width: 1200px)");
  
  return (
    <Flex
      flexDir={'column'}
      h={isMobile ? '395px' : '250px'}
      justifyContent={'space-between'}
      // w={isMobile ? '330px' : ''}
    >
      <Flex flexDir={'column'}>
        {
          supplyContent.map((content: any, index: number) => {
            return (
              <TopContent {...content} key={index}/>
            )
          })
        }
        <Flex 
          fontSize={'10px'}
          justifyContent={isMobile ? 'center' : ''}
        >
          <Link 
            outline={'#007AFF'}
            rel="noopener noreferrer" 
            target="_blank"
            href={'https://docs.google.com/spreadsheets/d/1-4dT3nS4q7RwLgGI6rQ7M1hPx9XHI-Ryw1rkBCvTdcs/edit#gid=681869004'}
            color={'#007AFF'}
            fontWeight={600}
          >
            Raw data
          </Link>
          <Flex ml={'3px'}>
            summarizing the history of the TON token
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Supply