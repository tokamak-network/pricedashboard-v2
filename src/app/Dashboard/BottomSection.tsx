import { Flex } from "@chakra-ui/react"
import SectionTitle from './components/Title';
import BottomContent from "./components/BottomContent";
import { useSupply } from '../../hooks/useSupply';
import { useTONPrice } from '../../hooks/useTONPrice';

function BottomSection () {
  const {circul} = useSupply()
  const { tonPrice } = useTONPrice()
  //@ts-ignore
  const { C1, C2, C3 } = circul
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
        <BottomContent
          title={'C1'}
          tooltip={''}
          value={C1}
          dollor={C1*tonPrice}
        />
        <BottomContent
          title={'C2'}
          tooltip={''}
          value={C1 + C2}
          dollor={(C1 + C2) * tonPrice}
        />
        <BottomContent
          title={'C3'}
          tooltip={''}
          value={C1 + C2 + C3}
          dollor={(C1 + C2 + C3) * tonPrice}
        />
      </Flex>
    </Flex>
  )
}

export default BottomSection