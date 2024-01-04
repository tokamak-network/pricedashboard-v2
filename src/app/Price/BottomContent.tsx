import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import '@fontsource/poppins';
import { commafyWithUndefined } from '../../utils/commify';

function BottomContent (props: { 
  title: string,
  krw: number,
  usd: number | string,
}) {
  const { title, krw, usd } = props;
  const [isMobile] = useMediaQuery("(max-width: 920px)");
  
  return (
    <Flex
      flexDir={isMobile ? 'row' : 'column'}
      minW={isMobile ? '330px' : '215px'}
      h={isMobile ? '101px' : '156px'}
      justifyContent={isMobile ? 'space-between' :''}
      // alignItems={isMobile ? '' : 'space-between'}
      color={'#333'}
      bg={'#eceef9'}
      boxShadow={'1px 1px 5px 0px rgba(0, 0, 0, 0.10) inset'}
      borderRadius={'10px'}
      fontWeight={600}
      fontSize={isMobile ? '16px' : '14px'}
      mb={isMobile? '20px' : ''}
    >
      <Flex 
        flexDir={'row'} 
        ml={'20px'} 
        alignItems={'center'}
        fontFamily={'Poppins, sans-serif'}
        // fontWeight={600} 
      >
        <Text fontWeight={700}>{title}</Text>
      </Flex>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        flexDir={'column'}
        h={isMobile ? '' : '74px'}
        mr={isMobile ? '20px' : ''}
        // h={'74px'}
      >
        <Flex
          fontSize={'18px'}
          mb={'10px'}
          fontWeight={'bold'}
        >
          ${usd.toLocaleString(undefined, {maximumFractionDigits: 2})} USD
        </Flex>
        <Flex
          fontWeight={300}
        >
          ({commafyWithUndefined(krw, 0)} KRW)
        </Flex>
      </Flex>
    </Flex>
  )
}

export default BottomContent