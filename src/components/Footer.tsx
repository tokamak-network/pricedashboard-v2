import { Flex, SimpleGrid, Link, useMediaQuery } from "@chakra-ui/react";

export default function Footer() {
  const [isMobile] = useMediaQuery("(max-width: 920px)");
  const contentHeader = [
    'About', 'Mainnet', 'L2 On-Demand', 'Ecosystem', 'Developers', 'Community'
  ]
  const footerContent = {
    About: [
      {
        title: 'Team',
        link: 'https://tokamak.network/about'
      },
      {
        title: 'Careers',
        link: 'https://tokamak.notion.site/TOKAMAK-NETWORK-CAREERS-5d338cfbb1a94eb8b8b8ecd81754e626'
      },
      {
        title: 'Partners',
        link: 'http://tokamak.network/#partners'
      },
    ],
    Mainnet: [
      {
        title: 'Darius',
        link: 'http://titan.tokamak.network/'
      },
    ],
    'L2 On-Demand' : [
      {
        title: 'Tokamak',
        link: 'http://tokamak.network/#layer2',
        span: 'OP'
      },
      {
        title: 'Tokamak',
        link: 'http://tokamak.network/#layer2',
        span: 'ZK+'
      },
    ],
    'Ecosystem' : [
      {
        title: 'Bridge & Swap',
        link: 'https://bridge.tokamak.network/#/'
      },
      {
        title: 'Staking',
        link: 'https://simple.staking.tokamak.network/staking'
      },
      {
        title: 'DAO',
        link: 'https://dao.tokamak.network/#/'
      },
      {
        title: 'Launchpad',
        link: 'https://tonstarter.tokamak.network/'
      },
    ],
    'Developers': [
      {
        title: 'Grant',
        link: 'https://tokamak.notion.site/Tokamak-Network-Grant-Program-f2384b458ea341a0987c7e73a909aa21'
      },
      {
        title: 'Github',
        link: 'https://github.com/tokamak-network'
      },
      {
        title: 'Documentation',
        link: 'https://tokamaknetwork.gitbook.io/'
      },
    ],
    Community: [
      {
        title: 'Medium',
        link: 'https://medium.com/onther-tech'
      },
      {
        title: 'Twitter',
        link: 'https://twitter.com/tokamak_network'
      },
      {
        title: 'Discord',
        link: 'https://discord.com/invite/J4chV2zuAK'
      },
      {
        title: 'Telegram',
        link: 'https://t.me/tokamak_network'
      },
      {
        title: 'Linkedin',
        link: 'https://www.linkedin.com/company/tokamaknetwork/'
      },
    ]
  }
  
  
  return (
    <Flex
      flexDir={'column'}
      w={isMobile ? '100%' : '90%'}
      mx={isMobile ? '' : '100px'}
      alignItems={isMobile ? 'center' : ''}
      mt={'50px'}
    >
      <SimpleGrid
        flexDir={'row'}
        justifyContent={isMobile? 'center' : 'space-between'}
        minW={isMobile ? '165px' : '100%'}
        // templateColumns={isMobile? 'repeat(2, 1fr)' : 'repeat(6, 1fr)'}
        minChildWidth={'150px'}
        rowGap={isMobile? 20 : 0}
        gap={isMobile? 20 : 0}
      >
        {
          contentHeader.map((header: any, index: number) => {
            //@ts-ignore
            const footerContetents = footerContent[header]
            return (
              <Flex 
                flexDir={'column'}
                alignItems={'space-between'}
                mr={'10px'}
                key={index}
              >
                <Title 
                  title={header}
                />
                {
                  //@ts-ignore
                  footerContetents ? footerContetents.map((content: any, index: number) => {
                    return (
                      <Content 
                        title={content.title}
                        link={content.link}
                        span={content.span}
                        key={index}
                      />
                    )
                  }) : ''
                } 
              </Flex>
            )
          })
        }
      </SimpleGrid>
      <Flex mt={'60px'} mb={'45px'} h={'1px'} bgColor={'#dfe4ee'} minW={'100%'}/>
      <Flex 
        flexDir={'row'}
        fontSize={'16px'}
        color={'#999'}
        fontWeight={'normal'}
        mb={'31px'}
      >
        <Flex>
          Copyright © 2023 Tokamak Network All Rights Reserved.
        </Flex>
      </Flex>
    </Flex>
  )
}

function Title (props: {title: string}) {
  return (
    <Flex
      fontSize={'20px'}
      fontWeight={'bold'}
      color={'#1c1c1c'}
      mb={'3px'}
    >
      {props.title}
    </Flex>
  )
}

function Content (props: { title: string, link: string, span?: string }) {

  return (
    <Link
      href={props.link}
      fontSize={'14px'}
      fontWeight={600}
      color={'#4c4c4c'}
      mt={'6px'}
      textDecoration={'none'}
      rel="noopener noreferrer" target="_blank"
    >
      {props.title}
      {
        props.span ?
        (
          <span
            style={{
              verticalAlign: 'super',
              display: 'inline-block',
              fontSize: 'smaller',
            }}
          >
            {props.span}
          </span>
        ) : ''
      }
      
    </Link>
  )
}