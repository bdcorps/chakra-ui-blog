import { Button, Center, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import { FunctionComponent } from 'react'
import AllPosts from '../components/AllPosts'
import Layout from '../components/Layout'
import { SiteType } from '../types'
import { getSite } from './api/sites'

interface SiteIndexProps {
  site: SiteType
}

const SiteIndex: FunctionComponent<SiteIndexProps> = ({
  site: { name, description, logo, posts },
}: SiteIndexProps) => {
  return (
    <>
      <NextSeo
        title={name}
        description={description}
        additionalLinkTags={[{ rel: 'icon', href: logo }]}
      />
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

        <VStack spacing={4} w="full" align="flex-start">
          <Text fontSize="xl" fontWeight={600}>
            Featured Posts
          </Text>

          {/* <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
            w="full"
          >
            <GridItem rowSpan={2} colSpan={1}>
              <Post post={posts[0]} />
            </GridItem>
            <GridItem rowSpan={2} colSpan={2}>
              <Post post={posts[0]} />
            </GridItem>
            <GridItem rowSpan={2} colSpan={2}>
              <Post post={posts[0]} />
            </GridItem>
          </Grid> */}
        </VStack>

        <AllPosts posts={posts} />
      </Layout>
    </>
  )
}

export function getServerSideProps() {
  const site: SiteType = getSite()

  const props: any = { site }
  return {
    props,
  }
}

export default SiteIndex
