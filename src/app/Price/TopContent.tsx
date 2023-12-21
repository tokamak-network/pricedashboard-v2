import { Flex, Text } from "@chakra-ui/react"
import Image from "next/image";
import TON_LOGO from '@/assets/ton-logo.svg'
import TOS_LOGO from '@/assets/tos-logo.svg'
import '@fontsource/inter';

function TopContent (props: {
  krw: string | number,
  usd: string | number
  type: string
}) {
  const { krw, usd, type } = props
  return (
    <Flex
      flexDir={'row'}
      w={'450px'}
      h={'120px'}
      mb={'18px'}
      justifyContent={'space-between'}
      alignItems={'center'}
      fontFamily={'Inter, sans-serif'}
      fontSize={'24px'}
      fontWeight={600}
      color={'#333'}
      bg={'#eceef9'}
      boxShadow={'1px 1px 5px 0px rgba(0, 0, 0, 0.10) inset'}
      borderRadius={'10px'}
    >
      <Flex flexDir={'row'} h={'72px'} alignItems={'center'} ml={'27px'}>
        <Image src={type === 'ton' ? TON_LOGO : TOS_LOGO} alt={""} />
        <Flex ml={'18px'}>
          {type === 'ton' ? 'TON Price' : 'TOS Price'}
        </Flex>
      </Flex>
      <Flex flexDir={'column'} alignItems={'end'} mr={'27px'}>
        <Flex>
          {krw.toLocaleString(undefined, {maximumFractionDigits:0})} KRW
        </Flex>
        <Flex
          fontSize={'18px'}
          fontWeight={300}
          mt={'6px'}
        >
          (${usd.toLocaleString(undefined, {maximumFractionDigits:2})} USD)
        </Flex>
      </Flex>
    </Flex>
  )
}

export default TopContent