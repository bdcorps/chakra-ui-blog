import { Center, HStack, Link, LinkBox, LinkOverlay } from '@chakra-ui/react'
import Image from 'next/image'
import { FunctionComponent } from 'react'

interface HeaderProps {}

const AppHeader: FunctionComponent<HeaderProps> = () => {
  return (
    <HStack py={2} spacing={6} align="center" w="full">
      <HStack spacing={2} w="full">
        <Link href="/" fontWeight={600} fontSize="md" color="brand.500">
          Blawg
        </Link>
      </HStack>
      <LinkBox>
        <LinkOverlay href={`https://twitter.com/sukh`} isExternal>
          <Center>
            <Image
              src="/twitter.svg"
              width={20}
              height={20}
              alt="Twitter logo"
            ></Image>
          </Center>
        </LinkOverlay>
      </LinkBox>
    </HStack>
  )
}

export default AppHeader
