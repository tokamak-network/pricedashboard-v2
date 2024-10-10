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
      pool: 'ETH / WTON',
      link: ''
    },
    {
      pool:'ETH / TOS',
      link: ''
    },
    {
      pool: 'ETH / DOC',
      link: ''
    },
    {
      pool: 'WTON / TOS',
      link: ''
    },
    {
      pool: 'TOS / DOC',
      link: ''
    }, 
    {
      pool: 'TOS / AURA',
      link: ''
    }, 
    
    {
      pool: 'TOS / LYDA',
      link: ''
    }
  ]
  const poolLink = () => {
    return (
      <Flex flexDir={'column'} mt={'10px'}>
        {
          pools.map((props: any, index: number) => {
            return (
              <Link
                href={props.link}
                textDecoration={'none'}
                rel="noopener noreferrer" target="_blank" 
                mt={'1px'}
                color={'#007AFF'}
                cursor={'pointer'}
                key={index}
              >
                <Flex flexDir={'row'}>
                  <Flex color='#000' mr={'4px'}>
                    {index + 1}{ '. ' }
                  </Flex>
                  {props.pool}
                </Flex>
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
