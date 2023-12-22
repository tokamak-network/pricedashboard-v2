import {
  Tooltip,
  useColorMode,
  PlacementWithLogical,
} from "@chakra-ui/react";

import { QuestionOutlineIcon } from "@chakra-ui/icons";

type tooltipProps = {
  label: string | undefined;
  placement?: PlacementWithLogical;
};

const BasicTooltip: React.FC<tooltipProps> = (props) => {
  const { colorMode } = useColorMode();
  const { label, placement } = props;

  return (
    <Tooltip
      display={label?.length === 0 ? "none" : "flex"}
      placement={placement ?? "top"}
      label={label}
      bg={colorMode === "dark" ? "#1f2128" : "#fff"}
      borderRadius={"3px"}
      color={colorMode === "light" ? "#07070c" : "#8b8b93"}
      fontSize="12px"
      maxW={'200px'}
      padding={'5px'}
      border={colorMode === "light" ? "solid 1px #e8edf2" : "solid 1px #313442"}
    >
      <QuestionOutlineIcon
        display={label?.length === 0 ? "none" : ""}
        h={"14px"}
        w={"14px"}
        color={'#333'}
      />
    </Tooltip>
  );
};

export default BasicTooltip;
