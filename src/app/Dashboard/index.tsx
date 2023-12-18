import { Flex } from "@chakra-ui/layout";
import { useSupply } from '../../hooks/useSupply';
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";

export default function Dashboard () {
  const data = useSupply();

  return (
    <Flex flexDir={'column'} maxW={'920px'} justifyContent={'center'} alignItems={'center'}>
      <Flex flexDir={'row'} justifyContent={'space-between'} minW={'920px'}>
        <TopSection 
          type={'supply'}
        />
        <TopSection 
          type={'burnt'}
        />
      </Flex>
      <BottomSection />
    </Flex>
  )
}