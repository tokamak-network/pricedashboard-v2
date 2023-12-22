import { Flex, Text } from "@chakra-ui/react";
import '@fontsource/poppins';

function BottomContent (props: { 
  title: string,
  krw: number,
  usd: number | string,
}) {
  const { title, krw, usd } = props;

  return (
    <Flex
      flexDir={'column'}
      w={'215px'}
      h={'156px'}
      // justifyContent={'center'}
      // alignItems={'center'}
      color={'#333'}
      bg={'#eceef9'}
      boxShadow={'1px 1px 5px 0px rgba(0, 0, 0, 0.10) inset'}
      borderRadius={'10px'}
      fontWeight={600}
      fontSize={'14px'}
    >
      <Flex 
        flexDir={'row'} 
        ml={'20px'} 
        fontFamily={'Poppins, sans-serif'}
      >
        <Text>{title}</Text>
      </Flex>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        flexDir={'column'}
        h={'74px'}
      >
        <Flex
          fontSize={'18px'}
        >
          {krw.toLocaleString(undefined, {maximumFractionDigits: 0})} KRW
        </Flex>
        <Flex
          fontWeight={300}
        >
          (${usd.toLocaleString(undefined, {maximumFractionDigits: 2})} USD)
        </Flex>
      </Flex>
    </Flex>
  )
}

export default BottomContent