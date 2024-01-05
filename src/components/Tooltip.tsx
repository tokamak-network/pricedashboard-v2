import {
  Tooltip,
  useColorMode,
  PlacementWithLogical,
  Text,
  Flex,
  Link
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { useState } from "react";
import '@fontsource/inter';

type tooltipProps = {
  label: string | undefined;
  placement?: PlacementWithLogical;
  label2?: string | undefined
  types?: string | undefined
};

const BasicTooltip: React.FC<tooltipProps> = (props) => {
  const { colorMode } = useColorMode();
  const { label, label2, placement, types } = props;
  const [isLabelOpen, setIsLabelOpen] = useState(false)
  const tooltipControl = () => {
    !isLabelOpen ? setIsLabelOpen(true) : setIsLabelOpen(false)
  }
  const pools = [
    {
      pool: 'DOC / TOS',
      link: 'https://info.uniswap.org/#/pools/0x369bca127b8858108536b71528ab3befa1deb6fc'
    }, 
    {
      pool:'TOS / ETH',
      link: 'https://info.uniswap.org/#/pools/0x2ad99c938471770da0cd60e08eaf29ebff67a92a'
    }, 
    {
      pool: 'ETH / WTON',
      link: 'https://info.uniswap.org/#/pools/0xc29271e3a68a7647fd1399298ef18feca3879f59'
    }, {
      pool: 'TOS / WTON',
      link: 'https://info.uniswap.org/#/pools/0x1c0ce9aaa0c12f53df3b4d8d77b82d6ad343b4e4'
    }, 
    {
      pool: 'TOS / AURA',
      link: 'https://info.uniswap.org/#/pools/0xbddd3a50bd2afd27aed05cc9fe1c8d67fcaa3218'
    }, 
    {
      pool: 'DOC / ETH',
      link: ' https://info.uniswap.org/#/pools/0xda3cc73170aa5bb7c0a9588e7690299df568d53d'
    }, 
    {
      pool: 'TOS / LYDA',
      link: 'https://info.uniswap.org/#/pools/0x3ae1e82f20c134867514ecd1e615856b312fb685'
    }
  ]
  const poolLink = () => {
    return (
      <Flex flexDir={'column'}>
        {
          pools.map((props: any, index: number) => {
            return (
              <Link
                href={props.link}
                textDecoration={'none'}
                rel="noopener noreferrer" target="_blank" 
                mr={'3px'}
                color={'#007AFF'}
                cursor={'pointer'}
              >
                {index + 1}{ '. ' }{props.pool}
              </Link>
            )
          })
        }
      </Flex>
    )
  }
  return (
    <Tooltip
      display={label?.length === 0 ? "none" : "flex"}
      placement={placement ?? "top"}
      pointerEvents={"all"}
      label={
        <Text
          fontWeight={label2 ? 700 : ''}
          color={'#000'}
        >
          { label } 
          {
            types === 'uniswap'? poolLink() :
            types === 'total' ? 
              <Link 
                href={'https://github.com/tokamak-network/ton-total-supply'} 
                rel="noopener noreferrer" 
                target="_blank"
                textDecor={'none'}
                color={'#007AFF'}
              > 
                repository.
              </Link> : ''
          }
          {
            label2 ?
            <Flex fontWeight={400}>
              <br />
              <br />
              {label2}
            </Flex>
            : ''
          }
          
        </Text>
      }
      bg={colorMode === "dark" ? "#1f2128" : "#fff"}
      borderRadius={"10px"}
      fontFamily={'Inter, sans-serif'}
      color={colorMode === "light" ? "#07070c" : "#8b8b93"}
      fontSize="14px"
      maxW={'200px'}
      padding={'20px'}
      bgColor={'#fff'}
      boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}
      isOpen={isLabelOpen}
      border={'0px'}
    >
      <QuestionOutlineIcon
        display={label?.length === 0 ? "none" : ""}
        h={"14px"}
        w={"14px"}
        color={'#333'}
        onMouseLeave={
          () => types === 'uniswap' || types === 'total' ? 
            '' : setIsLabelOpen(false)
        }
        onMouseEnter={
          () => types === 'uniswap' || types === 'total' ? 
            '' : setIsLabelOpen(true)}
        onClick={() => tooltipControl()}
      />
    </Tooltip>
  );
};

export default BasicTooltip;
