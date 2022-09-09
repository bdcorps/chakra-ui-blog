import { Container, VStack } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import Footer from '../Footer'
import Header from '../Header'

interface LayoutProps {
  children: React.ReactNode
}

const AppLayout: FunctionComponent<LayoutProps> = ({
  children,
}: LayoutProps) => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={10} w="full" align="center">
        <Header />
        {children}
        <Footer name="Blawg" />
      </VStack>
    </Container>
  )
}

export default AppLayout
