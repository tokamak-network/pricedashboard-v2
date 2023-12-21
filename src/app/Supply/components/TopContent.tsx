import { Flex, Text } from "@chakra-ui/react"
import Image from "next/image";
import QUSETION_IMAGE from '@/assets/Question.svg'

function TopContent (props: {
  content: string,
  tooltip: string,
  value: string | number
  link?: string
  type?: string
}) {
  const { content, tooltip, value, link, type } = props
  return (
    <Flex
      flexDir={'row'}
      w={'396px'}
      h={'16px'}
      mb={'18px'}
      justifyContent={'space-between'}
      fontFamily={'Inter'}
      fontSize={'14px'}
    >
      <Flex
        flexDir={'row'}
        alignItems={'center'}
      >
        <Text
          fontStyle={'normal'}
          fontWeight={300}
          mr={'2px'}
        >
          {content}
        </Text>
        <Flex>
          <Image src={QUSETION_IMAGE} alt={'alt'} />
        </Flex>
      </Flex>
      <Flex
        fontWeight={600}
        alignItems={'center'}
      >
        {type ? '$' :''}
        {value ? value.toLocaleString(undefined, {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2
        }) : '0.00'}
        {!type ? <Text ml={'3px'}>TON</Text> : ''}
      </Flex>

    </Flex>
  )
}

export default TopContent