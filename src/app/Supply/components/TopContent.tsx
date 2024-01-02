import { Flex, Text, useMediaQuery } from "@chakra-ui/react"
import Image from "next/image";

import LINK_ICON from '@/assets/foreign.svg'
import Link from "next/link";
import BasicTooltip from "@/components/Tooltip";

function TopContent (props: {
  content: string,
  tooltip: string,
  tooltip2?: string,
  value: string | number
  link?: string
  type?: string
  span?: string
}) {
  const { content, tooltip, tooltip2, value, link, type, span } = props
  const [isMobile] = useMediaQuery("(max-width: 920px)");
  return (
    <Flex
      flexDir={'row'}
      w={isMobile ? '90%' : '396px'}
      h={'16px'}
      mb={isMobile ? '27px' : '14px'}
      justifyContent={'space-between'}
      fontSize={'14px'}
      px={'15px'}
    >
      <Flex
        flexDir={'row'}
        alignItems={'center'}
        w={isMobile ? '140px' : ''}
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
            label2={tooltip2}
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