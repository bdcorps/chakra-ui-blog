import { Box, Container, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Image from 'next/image'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function BlogItemPage({ post }: any) {
  console.log({ post })
  return (
    <>
      {/* <NextSeo
        title={name}
        description={description}
        additionalLinkTags={[{ rel: 'icon', href: logo }]}
      /> */}

      <Prose>
        <Container maxW="container.md" p={6}>
          <VStack spacing={6} align="flex-start">
            <Link color="gray.500" fontSize="sm" href="/">
              ← Back
            </Link>
            <VStack spacing={2} align="flex-start">
              <Text color="gray.500" fontSize="sm">
                Thursday, June 23, 2022
              </Text>
              <Heading fontSize="3xl">{post?.title}</Heading>
              <Text>{post?.description}</Text>
              <Text color="gray.500" fontSize="sm">
                By Adam Wathan
              </Text>
            </VStack>

            <Box>
              <Image
                src={post?.coverImage}
                alt="Blog header image"
                width={800}
                height={400}
              ></Image>
            </Box>

            <div dangerouslySetInnerHTML={{ __html: post?.content }} />

            {/* <Text color="gray.600" fontSize="md">
            {post?.content}
          </Text> */}
          </VStack>
        </Container>
      </Prose>
    </>
  )
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
