import { Flex, useMediaQuery } from "@chakra-ui/react"
import SectionTitle from './components/Title';
import BottomContent from "./components/BottomContent";
import { useSupplyBottom } from '../../hooks/useSupplyBottom';

function BottomSection () {
  const { circulSupply } = useSupplyBottom()
  const [isMobile] = useMediaQuery("(max-width: 920px)");
  
  return (
    <Flex
      w={isMobile? '330px' :'920px'}
      h={isMobile ? '441px' :'156px'}
      bg={'#eceef9'}
      boxShadow={'1px 1px 5px 0px rgba(0, 0, 0, 0.10) inset'}
      // padding={'26px'}
      flexDir={'column'}
      alignItems={'center'}
      borderRadius={'10px'}
      mt={isMobile ? '70px' : '20px'}
      mb={isMobile ? '40px' : '0px'}
    >
      <SectionTitle 
        title={'TON LIQUIDITY MEASURE'}
      />
      <Flex
        w={isMobile ? '100%' : '740px'}
        flexDir={isMobile ? 'column' : 'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mt={isMobile ? '40px' : ''}
      >
        {
          circulSupply.map((content: any, index: number) => {
            return (
              <BottomContent {...content} key={index}/>
            )
          })
        }
      </Flex>
    </Flex>
  )
}

export default BottomSection