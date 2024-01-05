import { Flex, useMediaQuery } from '@chakra-ui/react'
import SectionTitle from './components/Title';
import Supply from './components/Supply';
import Burnt from './components/Burnt';

function TopSection (props: { type: string }) {
  const { type } = props
  const [isMobile] = useMediaQuery("(max-width: 920px)");
  
  return (
    <Flex
      w={isMobile ? '330px' : '450px'}
      borderRadius={'10px'}
      mx={isMobile ? '10px' : ''}
      mb={
        isMobile ? 
        type === 'supply' ? '20px' : '120px' 
        : ''
      }
      height={
        isMobile ?
        type === 'supply' ? '410px' : '214px': 
        type === 'supply' ? '330px' : '184px'
      }
      bg={'#eceef9'}
      boxShadow={'1px 1px 5px 0px rgba(0, 0, 0, 0.10) inset'}
      // padding={'10px'}
      // mr={'20px'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'start'}
    >
      <SectionTitle 
        title={ type === 'supply' ? 'TON SUPPLY' : 'TON LOCKED'}
      />
      <Flex
        // mt={'28px'}
      >
        {
          type === 'supply' ? (
            <Supply />
          ) : (
            <Flex flexDir={'column'}>
              <Burnt />
              <Flex flexDir={'column'} mt={isMobile ? '30px' : '60px'}>
                <Flex fontSize={'13px'} fontWeight={300} w={isMobile ? '330px' : '396px'} mb="15px">
                  † Contract values need to be divided by 10^27 to get correct decimal place.
                </Flex>
                <Flex fontSize={'13px'} fontWeight={300} w={isMobile ? '330px' : '396px'} mb="23px">
                  †† Contract values need to be divided by 10^18 to get correct decimal place.
                </Flex>
              </Flex>
            </Flex>
          )
        }

      </Flex>

    </Flex>
  )
}

export default TopSection