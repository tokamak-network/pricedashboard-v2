import { Flex, Link } from "@chakra-ui/react";
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
        <Flex 
          fontSize={'10px'}
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