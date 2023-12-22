import { Flex } from '@chakra-ui/react'
import SectionTitle from './components/Title';
import Supply from './components/Supply';
import Burnt from './components/Burnt';

function TopSection (props: { type: string }) {
  const { type } = props
  
  return (
    <Flex
      w={'450px'}
      borderRadius={'10px'}
      height={'330px'}
      bg={'#eceef9'}
      boxShadow={'1px 1px 5px 0px rgba(0, 0, 0, 0.10) inset'}
      // padding={'10px'}
      // mr={'20px'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'start'}
    >
      <SectionTitle 
        title={ type === 'supply' ? 'TON TOKEN SUPPLY' : 'TON LOCKED / BURNT'}
      />
      <Flex
        // mt={'28px'}
      >
        {
          type === 'supply' ? (
            <Supply />
          ) : (
            <Burnt />
          )
        }

      </Flex>

    </Flex>
  )
}

export default TopSection