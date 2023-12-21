import { Flex, Link } from "@chakra-ui/layout";
import { useSupply } from '../../hooks/useSupply';
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
// import Link from "next/link";
import LINK_ICON from "@/assets/foreign.svg"
import Image from "next/image";

export default function Supply () {
  const data = useSupply();

  return (
    <Flex 
      flexDir={'column'} 
      maxW={'920px'} 
      justifyContent={'center'} 
      alignItems={'center'}
    >
      <Flex flexDir={'row'} justifyContent={'space-between'} minW={'920px'}>
        <TopSection 
          type={'supply'}
        />
        <TopSection 
          type={'burnt'}
        />
      </Flex>
      <BottomSection />
      <Flex mt={'40px'} alignItems={'center'}>
        <Link 
          outline={'#007AFF'}
          href={'https://docs.google.com/spreadsheets/d/1-4dT3nS4q7RwLgGI6rQ7M1hPx9XHI-Ryw1rkBCvTdcs/edit#gid=681869004'}
        >
          TON Token Supply/Vesting/Unlock Sheet
        </Link>
        <Flex ml={'5px'}>
          <Image src={LINK_ICON} alt=""/>
        </Flex>
      </Flex>
    </Flex>
  )
}