import { Flex, Text } from "@chakra-ui/react";

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
      w={'139px'}
      h={'66px'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Flex flexDir={'row'} fontSize={'20px'} fontWeight={600} h={'30px'}>
        <Text>{title}</Text>
      </Flex>
      <Text fontSize={'14px'} fontWeight={600} fontFamily={'Inter'} h={'14px'}>
        {value ? value.toLocaleString(undefined, {maximumFractionDigits:2}) : ''}
      </Text>
      <Text fontSize={'14px'} fontWeight={300} h={'14px'} mt={'16px'}>
        ${dollor ? dollor.toLocaleString(undefined, {maximumFractionDigits:2}) : ''} USD
      </Text>
    </Flex>
  )
}

export default BottomContent