import {Flex, Link, Text, useTheme} from '@chakra-ui/react';
import BANNER from '@/assets/banner.png'
import Image from "next/image";

function TokamakGNB() {
  function Menu(props: any) {
    const theme = useTheme();
    return (
      <Text
        h={'79px'}
        // lineHeight={'45px'}
        textAlign={'center'}
        cursor={'pointer'}
        bg={props.activetab ? '#FFFFFF' : '#FFFFFF'}
        color={props.activetab ? '#353C48' : ''}
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
      h={'80px'}
      bg={'#fff'}
      color={'#1c1c1c'}
      fontSize={'16px'}
      fontWeight={600}
      justifyContent={'space-between'}
      // alignItems={'center'}
      flexDir={'row'}
      
    >
      {/* <Menu
        title={'Tokamak Network'}
        w={'158px'}
        url={'https://tokamak.network/#/'}></Menu> */}
      <Flex
        alignItems={'center'}
        ml={'40px'}
      >
        <Image src={BANNER} alt=""/>
      </Flex>
      <Flex
        alignItems={'center'}
        // justifyContent={'center'}
        h={'80px'}
        mt={'30px'}
      >
        <Menu
          title={'Titan Network (L2)'}
          // w={'156px'}
          url={'https://titan.tokamak.network'}
          mr={'40px'}
        />
        <Menu
          title={'Tokamak Bridge'}
          // w={'136px'}
          url={'https://bridge.tokamak.network/#/'}
          mr={'40px'}
        />
        <Menu
          title={'Staking'}
          activetab={'true'}
          // w={'90px'}
          url={'https://simple.staking.tokamak.network/'}
          mr={'40px'}
        />
        <Menu
          title={'DAO'}
          // w={'68px'}
          url={'https://dao.tokamak.network/#/'} 
          mr={'40px'}
        />
        <Menu
          title={'Launchpad'}
          // w={'110px'}
          url={'https://tonstarter.tokamak.network/'}
        />
      </Flex>
      <Flex w={'150px'}>

      </Flex>
    </Flex>
  );
}

export default TokamakGNB;
