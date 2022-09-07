import {
  Box,
  Container,
  Divider,
  HStack,
  LinkBox,
  Text,
} from '@chakra-ui/layout'
import { FunctionComponent } from 'react'

interface FooterProps {
  name: string
}

export const Footer: FunctionComponent<FooterProps> = ({
  name,
}: FooterProps) => {
  return (
    <Box id="footer" w="full">
      <Divider />
      <Container maxW="container.xl" p={4}>
        <HStack py={2} spacing={6} align="center">
          <HStack spacing={2}>
            <Text fontWeight={600} fontSize="md">
              © 2022 {name}
            </Text>
          </HStack>
          <LinkBox>
            {/* <LinkOverlay href={`https://twitter.com/AnthonyCastrio`} isExternal>
          <Image src="twitter.svg"></Image>
        </LinkOverlay> */}
          </LinkBox>
        </HStack>
      </Container>
    </Box>
  )
}
