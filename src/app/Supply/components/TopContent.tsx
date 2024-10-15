import { Flex, Text, useMediaQuery } from "@chakra-ui/react"
import Image from "next/image";

import LINK_ICON from '@/assets/foreign.svg'
import PREV from '@/assets/pagenate-prev-arrow-icon-inactive_1.svg';
import Link from "next/link";
import BasicTooltip from "@/components/Tooltip";
import { commafyWithUndefined } from '../../../utils/commify';

function SupplyTopContent (props: {
  content: string,
  tooltip: string,
  tooltip2?: string,
  value: string | number
  link?: string
  type?: string
  span?: string
  types?: string
  mb?: string
}) {
  const { content, tooltip, tooltip2, value, link, type, span, types, mb } = props
  const [isMobile] = useMediaQuery("(max-width: 920px)");
  return (
    <Flex
      flexDir={'row'}
      w={isMobile ? '90%' : '396px'}
      h={'16px'}
      mb={mb ? mb : isMobile ? '27px' : '14px'}
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
            types={types}
          />
        </Flex>
      </Flex>
      <Flex
        fontWeight={600}
        alignItems={'center'}
      >
        {type ? '$' :''}
        {value ? commafyWithUndefined(value, 0) : '0'}
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

export default SupplyTopContent