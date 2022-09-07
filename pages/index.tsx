import { Button, Center, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import AllPosts from '../components/AllPosts'
import Layout from '../components/Layout'
import { Site } from '../types'
import { getSite } from './api/sites'

interface SiteIndexProps {
  site: Site
}

const SiteIndex: FunctionComponent<SiteIndexProps> = ({
  site: { name, description, subdomain, posts },
}: SiteIndexProps) => {
  return (
    <Layout>
      <Center height="50vh" w="full">
        <VStack alignItems="center" spacing={4} maxW="container.sm">
          <Text color="brand.500">Our blog</Text>
          <Heading as="h1" fontSize="4xl">
            {name}
          </Heading>
          <Text textAlign="center" color="gray.600">
            {description}
          </Text>

          <Center w="full">
            <Input
              placeholder="Enter your email"
              size="md"
              maxW={['full', 280]}
            />
            <Button colorScheme="brand" ml={4}>
              Subscribe
            </Button>
          </Center>
        </VStack>
      </Center>

      <AllPosts posts={posts} />
    </Layout>
  )
}

export async function getServerSideProps({ params }: any) {
  const site: Site | null = await getSite()

  const props: any = { site }
  return {
    props,
  }
}

export default SiteIndex
