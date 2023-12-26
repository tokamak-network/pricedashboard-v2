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

export default function Entry({ children }: { children: React.ReactNode }) {
  // const [isMobile] = useMediaQuery("(max-width: 1200px)");

  // if (isMobile) {
  //   return (
  //     <Center h={"100vh"}>
  //       <MobileView />
  //     </Center>
  //   );
  // }

  return (
    <Flex 
      w={'100%'} 
      justifyContent={'start'} 
      
      flexDir={'column'}
      bgColor={'#fff'}
      fontFamily={'Inter, sans-serif'}
    >
      <TokamakGNB />
      <Header />
      <Flex alignItems={'center'} >
        <Center> {children} </Center>

      </Flex>
      <Footer />
    </Flex>
    // <Center h={"100vh"}>{children} />
    // <ApolloProvider client={apolloClient}>
      // {/* <Header /> */}
      // <Center h={"100vh"}>{children} />
      // <GlobalComponents /> 
    // </ApolloProvider>
  );
}
