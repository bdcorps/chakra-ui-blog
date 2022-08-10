import { Box, Center, Heading, Text } from '@chakra-ui/react'
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
        <Center height="20vh">
          <Box>
            <Heading fontSize="2xl">{name}</Heading>
            <Text align="center">{description}</Text>
          </Box>
        </Center>

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
