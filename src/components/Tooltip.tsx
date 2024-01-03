import {
  Tooltip,
  useColorMode,
  PlacementWithLogical,
  Text,
  Flex
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { useState } from "react";
import '@fontsource/inter';

type tooltipProps = {
  label: string | undefined;
  placement?: PlacementWithLogical;
  label2?: string | undefined
};

const BasicTooltip: React.FC<tooltipProps> = (props) => {
  const { colorMode } = useColorMode();
  const { label, label2, placement } = props;
  const [isLabelOpen, setIsLabelOpen] = useState(false)

  return (
    <Tooltip
      display={label?.length === 0 ? "none" : "flex"}
      placement={placement ?? "top"}
      label={
        <Text
          fontWeight={label2 ? 700 : ''}
          color={'#000'}
        >
          {label}
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
        onMouseEnter={() => setIsLabelOpen(true)}
        onMouseLeave={() => setIsLabelOpen(false)}
        onClick={() => setIsLabelOpen(true)}
      />
    </Tooltip>
  );
};

export default BasicTooltip;
