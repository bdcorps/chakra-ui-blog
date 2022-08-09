import { Container, VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Header from "../Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <Container maxW="container.md">
      <VStack spacing={10} w="full" align="center">
        <Header />
        {children}
      </VStack>
    </Container>
  );
};

export default Layout;
