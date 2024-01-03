import {
  Flex,
  CircularProgress,
  Box,
  Stack,
  Button,
  Text,
  useTheme,
  Drawer,
  DrawerBody,
  DrawerContent,
  useDisclosure,
  Tooltip,
  Link
} from "@chakra-ui/react";
import Image from "next/image";
import LOGO from '@/assets/Tokamak_transparent.png'
import Burger_icon from "@/assets/Burger.svg";
import { useRef, useState } from "react";
import Burger_close_icon from "@/assets/Burger_close_icon.png";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

function MobileHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>([]);
  const [isHover, setIsHover] = useState<number | undefined>(undefined);
  const [width] = useWindowDimensions();

  return (
    <Flex
      h="80px"
      alignItems={"center"}
      justifyContent={"space-between"}
      width="90%"
      px={'20px'}
    >
      <Flex
        // ml={'0px'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Image width={40} src={LOGO} alt="" />
        <Flex
          fontSize={'16px'}
          fontFamily={'Helvetica, sans-serif'}
          fontWeight={'bold'}
          ml={'7px'}
          w={'150px'}
        >
          Tokamak Network Price Dashboard
        </Flex>
      </Flex> 
        <Flex
          height={30}
          bg="transparent"
          _focus={{
            bg: "transparent",
          }}
          _active={{
            bg: "transparent",
          }}
          p={0}
          // ml="10px"
          // mr={'30px'}
          ref={btnRef}
          onClick={onOpen}
          outline={'none'}
          cursor={'pointer'}
        >
          <Image src={Burger_icon} alt={"Burger_icon"} height={30} width={30} />
        </Flex>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size={width && width < 460? "full":'md'}
        >
          <DrawerContent 
            bg="white" 
            // padding="26px 10px 10px 20px"
            py={'20px'}
          >
            <Flex w="100%" justifyContent={"flex-end"} mr={'20px'}>
              <Flex
                bg="transparent"
                _focus={{
                  bg: "transparent",
                }}
                _active={{
                  bg: "transparent",
                }}
                p={0}
                mr="10px"
                ref={btnRef}
                onClick={onClose}
                outline={'none'}
                cursor={'pointer'}
              >
                <Image
                  src={Burger_close_icon}
                  alt={"Burger_icon"}
                  height={30}
                  width={30}   
                />
              </Flex>
            </Flex>

            <DrawerBody ml={'20px'}>
              <Flex mt="24px" flexDir={"column"} fontFamily={'Helvetica, sans-serif'}>
                <Link 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tokamaknetwork.gitbook.io/home/03-information/buy-ton"
                  textDecor={'none'}
                  color="#1c1c1c"
                  onClick={onClose}
                  // mr={'40px'}
                >
                  <Flex
                    fontSize={"20px"}
                    fontWeight={600}
                    mb="30px"
                    textDecor={'none'}
                    color={"#3e495c"}
                    cursor={"pointer"}
                    onMouseEnter={() => setIsHover(0)}
                    onMouseLeave={() => setIsHover(undefined)}
                  >
                    Buy TON
                  </Flex>
                </Link>
                <Link 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tokamaknetwork.gitbook.io/home/03-information/buy-tos"
                  textDecor={'none'}
                  color="#1c1c1c"
                  onClick={onClose}
                >
                  <Flex
                    fontSize={"20px"}
                    fontWeight={600}
                    mb="30px"
                    textDecor={'none'}
                    color={"#3e495c"}
                    cursor={"pointer"}
                    onMouseEnter={() => setIsHover(0)}
                    onMouseLeave={() => setIsHover(undefined)}
                  >
                    Buy TOS
                  </Flex>
                </Link>
                {/* <Tooltip 
                  label={'Coming soon!'} 
                  placement={'auto'}
                  hasArrow arrowSize={15}
                  bgColor={'#1C1C1C'}
                  color={'#fff'}
                  padding={'5px'}
                  borderRadius={"3px"}
                >
                  <Text
                    fontSize={"20px"}
                    fontWeight={600}
                    mb="30px"
                    color={"#3e495c"}
                    cursor={"pointer"}
                    onMouseEnter={() => setIsHover(0)}
                    onMouseLeave={() => setIsHover(undefined)}
                  >
                    Dune Dashboard
                  </Text>
                </Tooltip> */}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    // </Flex>
  );
}

export default MobileHeader;
