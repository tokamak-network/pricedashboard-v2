import { Flex } from "@chakra-ui/react";
import '@fontsource/poppins';

function SectionTitle (props: { title: string }) {
  const { title } = props
  return (
    <Flex
      // minW={'100%'}
      fontSize={'25px'}
      fontFamily={'Poppins, sans-serif'}
      fontStyle={'normal'}
      fontWeight={700}
      alignItems={'center'}
      textAlign={'center'}
      my={'22px'}
    >
      {title}
    </Flex>
  )
}

export default SectionTitle