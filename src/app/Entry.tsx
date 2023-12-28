import { Center, Flex, useMediaQuery } from "@chakra-ui/react";
// import Header from "@/components/header/Index";
// import MobileView from "./Mobile";
// import { ApolloProvider } from "@apollo/client";
// import useConnectedNetwork from "@/hooks/network";
// import { apolloClient } from "@/apollo";
import TokamakGNB from '../components/TokamakGNB';
import '@fontsource/inter';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileTokamakGNB from "@/components/MobileTokamakGNB";

export default function Entry({ children }: { children: React.ReactNode }) {
  const [isMobile] = useMediaQuery("(max-width: 1200px)");

  return (
    <Flex 
      w={'100%'} 
      justifyContent={'start'} 
      flexDir={'column'}
      bgColor={'#fff'}
      fontFamily={'Inter, sans-serif'}
    >
      {
        isMobile ? 
        // <MobileTokamakGNB /> : 
        '' :
        <TokamakGNB />
      }
      <Header />
      <Flex alignItems={'center'} >
        <Center> {children} </Center>
      </Flex>
      <Footer />
    </Flex>

  );
}
