import { Flex, Text, useMediaQuery } from "@chakra-ui/react"
import Image from "next/image";
import TON_LOGO from '@/assets/ton-logo.svg'
import TOS_LOGO from '@/assets/tos-logo.svg'
import '@fontsource/poppins';

function TopContent (props: {
  krw: string | number,
  usd: string | number
  type: string
}) {
  const { krw, usd, type } = props
  const [isMobile] = useMediaQuery("(max-width: 920px)");
  return (
    <Flex
      flexDir={'row'}
      w={isMobile ? '100%' :'450px'}
      h={'120px'}
      mb={'18px'}
      justifyContent={'space-between'}
      alignItems={'center'}
      fontSize={isMobile ? '20px' : '24px'}
      fontWeight={600}
      color={'#333'}
      bg={'#eceef9'}
      boxShadow={'1px 1px 5px 0px rgba(0, 0, 0, 0.10) inset'}
      borderRadius={'10px'}
    >
      <Flex 
        flexDir={'row'} 
        h={isMobile ? '54px' : '72px'} 
        alignItems={'center'} 
        ml={isMobile ? '15px' :'27px'}
      >
        <Flex
          borderRadius={'225px'}
          bgColor={'#fff'}
          w={isMobile ? '50px' : '72px'}
          h={isMobile ? '50px' : '72px'}
          justifyContent={'center'}
          alignItems={'center'}
          border={type === 'ton' ? '0.5px solid #DCDCDC' : '2px solid #DCDCDC'}
        >
          <Image 
            src={type === 'ton' ? TON_LOGO : TOS_LOGO} 
            alt={""} 
            width={isMobile ? 
              type === 'ton' ? 50 : 35 : 
              type === 'ton' ? 72 : 50
            } 
          />
        </Flex>
        <Flex ml={isMobile ? '8px' : '18px'} fontFamily={'Poppins, sans-serif'}>
          {type === 'ton' ? 'TON Price' : 'TOS Price'}
        </Flex>
      </Flex>
      <Flex flexDir={'column'} alignItems={'end'} mr={'27px'}>
        <Flex>
          {krw.toLocaleString(undefined, {maximumFractionDigits:0})} KRW
        </Flex>
        <Flex
          fontSize={isMobile? '16px' : '18px'}
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