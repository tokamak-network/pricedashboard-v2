import { Flex, Text } from "@chakra-ui/react"
import Image from "next/image";
import QUSETION_IMAGE from '@/assets/Question.svg'
import LINK_ICON from '@/assets/foreign.svg'
import Link from "next/link";
import BasicTooltip from "@/components/Tooltip";

function TopContent (props: {
  content: string,
  tooltip: string,
  value: string | number
  link?: string
  type?: string
  span?: string
}) {
  const { content, tooltip, value, link, type, span } = props
  return (
    <Flex
      flexDir={'row'}
      w={'396px'}
      h={'16px'}
      mb={'14px'}
      justifyContent={'space-between'}
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
          {
            span ?
            (
              <span
                style={{
                  verticalAlign: 'super',
                  display: 'inline-block',
                  fontSize: 'smaller',
                }}
              >
                {span}
              </span>
            ) : ''
          }
        </Text>
        <Flex>
          <BasicTooltip 
            label={tooltip}
          />
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
        {
          link ? (
            <Flex ml={'4px'}>
              <Link 
                href={link}
                rel="noopener noreferrer" target="_blank"
              >
                <Image src={LINK_ICON} alt="" />
              </Link>
            </Flex>
          ) : ''
        }
      </Flex>

    </Flex>
  )
}

export default TopContent