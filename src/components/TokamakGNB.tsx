import {Flex, Link, Text, useTheme} from '@chakra-ui/react';
import '@fontsource/titillium-web';

function TokamakGNB() {
  function Menu(props: any) {
    const theme = useTheme();
    return (
      <Text
        h={'45px'}
        lineHeight={'45px'}
        
        cursor={'pointer'}
        fontFamily={'Titillium Web, sans-serif'}
        // target={props.title === 'Bridge & Swap' ? '_blank' : '_self'}
        // fontWeight="bold"
        {...props}
        
      >
        <Link
          outline={'none'}
          _hover={{
            outline: 'none',
          }}
          _focus={{
            outline: 'none',
          }}
          textDecor={'none'}
          color={'#fff'}
          textAlign={'center'}
          fontSize={'16px'}
          fontFamily={'Titillium Web, sans-serif'}
          bg={''}
          href={props.url}
        >
          {props.title}
        </Link>
      </Text>
    );
  }

  return (
    <Flex
      w={'100%'}
      minW={'100vh'}
      h={'45px'}
      bg={'#2775ff'}
      color={'#ffffff'}
      fontSize={15}
      fontWeight={400}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Menu
        title={'Tokamak Network'}
        w={'158px'}
        url={'https://tokamak.network/#/'}></Menu>
      <Menu
        title={'L2 Mainnet'}
        w={'112px'}
        url={'https://titan.tokamak.network'}></Menu>
      <Menu
        title={'Bridge & Swap'}
        w={'136px'}
        url={'https://bridge.tokamak.network/#/'}></Menu>
      <Menu
        title={'Staking'}
        activetab={'true'}
        w={'90px'}
        url={'https://simple.staking.tokamak.network/'}></Menu>
      <Menu
        title={'DAO'}
        w={'68px'}
        url={'https://dao.tokamak.network/#/'}></Menu>
      <Menu
        title={'Launchpad'}
        w={'110px'}
        url={'https://tonstarter.tokamak.network/'}></Menu>
    </Flex>
  );
}

export default TokamakGNB;
