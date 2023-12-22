import { Flex } from "@chakra-ui/react"
import SectionTitle from './components/Title';
import BottomContent from "./components/BottomContent";
import { useSupplyBottom } from '../../hooks/useSupplyBottom';

function BottomSection () {
  const { circulSupply } = useSupplyBottom()
  
  return (
    <Flex
      w={'920px'}
      h={'156px'}
      bg={'#eceef9'}
      boxShadow={'1px 1px 5px 0px rgba(0, 0, 0, 0.10) inset'}
      // padding={'26px'}
      flexDir={'column'}
      alignItems={'center'}
      borderRadius={'10px'}
      mt={'20px'}
    >
      <SectionTitle 
        title={'TON LIQUIDITY MEASURE'}
      />
      <Flex
        w={'740px'}
        flexDir={'row'}
        justifyContent={'space-between'}
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