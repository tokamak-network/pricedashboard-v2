import { Flex } from "@chakra-ui/react";

function SectionTitle (props: { title: string }) {
  const { title } = props
  return (
    <Flex
      minW={'100%'}
      fontSize={'20px'}
      fontFamily={'Poppins'}
      fontStyle={'normal'}
      fontWeight={600}
      alignItems={'center'}
      textAlign={'center'}
      my={'25px'}
    >
      {title}
    </Flex>
  )
}

export default SectionTitle