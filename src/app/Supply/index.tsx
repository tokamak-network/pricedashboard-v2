import { Flex, Link } from "@chakra-ui/layout";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import { useMediaQuery } from "@chakra-ui/react";

export default function Supply () {
  const [isMobile] = useMediaQuery("(max-width: 920px)");

  return (
    <Flex 
      flexDir={'column'} 
      w={isMobile ? '100%' : '920px'} 
      justifyContent={'center'} 
      alignItems={'center'}
    >
      <Flex 
        flexDir={isMobile ? 'column' :'row'} 
        justifyContent={'space-between'} 
        minW={isMobile ? '330px' :'920px'}
      >
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