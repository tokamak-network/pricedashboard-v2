import { Flex, Text } from "@chakra-ui/react";
import '@fontsource/poppins';

function BottomContent (props: { 
  title: string,
  tooltip: string,
  value: number | string,
  dollor: number | string
}) {
  const { title, tooltip, value, dollor } = props;

  return (
    <Flex
      flexDir={'column'}
      w={'160px'}
      h={'66px'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Flex 
        flexDir={'row'} 
        fontSize={'20px'} 
        fontWeight={600} 
        h={'20px'}
        fontFamily={'Poppins, sans-serif'}
      >
        {title}
      </Flex>
      <Flex 
        fontSize={'14px'} 
        fontWeight={600} 
        h={'14px'} 
        my={'15px'}
      >
        {value ? value.toLocaleString(undefined, {maximumFractionDigits:2}) : ''} TON
      </Flex>
      <Flex fontSize={'14px'} fontWeight={300} h={'14px'} mb={'25px'}>
        ${dollor ? dollor.toLocaleString(undefined, {maximumFractionDigits:2}) : ''} USD
      </Flex>
    </Flex>
  )
}

export default BottomContent