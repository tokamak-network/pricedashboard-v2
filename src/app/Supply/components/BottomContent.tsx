import BasicTooltip from "@/components/Tooltip";
import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import '@fontsource/poppins';

function BottomContent (props: { 
  title: string,
  tooltip: string,
  tooltip2?: string,
  value: number | string,
  dollor: number | string
}) {
  const { title, tooltip, value, dollor, tooltip2 } = props;
  const [isMobile] = useMediaQuery("(max-width: 920px)");

  return (
    <Flex
      flexDir={'column'}
      w={'160px'}
      h={'66px'}
      justifyContent={'center'}
      alignItems={'center'}
      mb={isMobile? '30px' : ''}
    >
      <Flex 
        flexDir={'row'} 
        fontSize={'20px'} 
        fontWeight={600} 
        h={'20px'}
        fontFamily={'Poppins, sans-serif'}
        alignItems={'center'}
        w={'43px'}
        justifyContent={'space-between'}
      >
        {title}
        <BasicTooltip 
          label={tooltip}
          label2={tooltip2}
        />
      </Flex>
      <Flex 
        fontSize={'14px'} 
        fontWeight={600} 
        h={'14px'} 
        my={'10px'}
      >
        {value ? value.toLocaleString(undefined, { maximumFractionDigits:0 }) : ''} TON
      </Flex>
      <Flex fontSize={'14px'} fontWeight={300} h={'14px'} mb={'25px'}>
        ${dollor ? dollor.toLocaleString(undefined, { maximumFractionDigits:2 }) : ''} USD
      </Flex>
    </Flex>
  )
}

export default BottomContent