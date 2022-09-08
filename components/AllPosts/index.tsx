import {
  Badge,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import router, { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import { PostType } from '../../types'

interface PostProps {
  post: any
}

export const Post: FunctionComponent<PostProps> = ({ post }: any) => {
  return (
    <Flex
      w="full"
      cursor="pointer"
      bgColor="gray.50"
      border="1px"
      borderColor="gray.100"
      p={4}
      rounded="lg"
      _hover={{
        boxShadow: 'sm',
      }}
      onClick={() => {
        router.push(`/blog/${[post.id]}`)
      }}
    >
      <Stack
        spacing={4}
        w="full"
        flex={7}
        align="flex-start"
        direction={['column', 'row']}
      >
        <Image
          src="https://picsum.photos/seed/picsum/200"
          h={200}
          w={['full', 200]}
          alt="Blog Image"
        />
        <VStack align="flex-start" spacing={3}>
          <Text fontWeight={600} color="brand.500" fontSize="sm">
            Pheonix Baker • 19 Jan 2022
          </Text>
          <Text fontWeight={500} noOfLines={2} color="gray.700">
            {post.title}
          </Text>
          <Text color="gray.500">
            Linear helps streamline software projects, sprints, tasks, and bug
            tracking. Here’s how to get...
          </Text>
          <Wrap spacing={3}>
            <WrapItem>
              <Badge colorScheme="red" rounded="full" px={2}>
                Design
              </Badge>
            </WrapItem>
            <WrapItem>
              <Badge colorScheme="purple" rounded="full" px={2}>
                Presentation
              </Badge>
            </WrapItem>
          </Wrap>
        </VStack>
      </Stack>
    </Flex>
  )
}

interface PostsProps {
  posts: PostType[]
}

const Posts: FunctionComponent<PostsProps> = ({ posts }: PostsProps) => {
  const router = useRouter()
  return (
    <Stack spacing={10} w="full" direction={['column', 'row']}>
      {posts.map((post: any, i: number) => {
        return <Post post={post} key={`post_${i}`} />
      })}
    </Stack>
  )
}

// interface PostsProps {
//   posts: Post[]
// }

// const Posts: FunctionComponent<PostsProps> = ({ posts }: PostsProps) => {
//   const router = useRouter()
//   return (
//     <VStack
//       spacing={4}
//       w="full"
//       divider={<StackDivider borderColor="gray.200" />}
//     >
//       {posts.map((post: any, i: number) => {
//         return (
//           <Flex
//             w="full"
//             key={`post_${i}`}
//             cursor="pointer"
//             onClick={() => {
//               router.push(`/blog/${[post.id]}`)
//             }}
//           >
//             <HStack spacing={4} w="full" flex={7} align="flex-start">
//               <Text fontWeight={500} color="gray.300">
//                 {i + 1}
//               </Text>
//               <Text fontWeight={500}>{post.title}</Text>
//             </HStack>
//             <Spacer />
//             <Text color="gray.700" flex={1} textAlign="end">
//               Read →
//             </Text>
//           </Flex>
//         )
//       })}
//     </VStack>
//   )
// }

interface AllPostsProps {
  posts: PostType[]
}

const AllPosts: FunctionComponent<AllPostsProps> = ({
  posts,
}: AllPostsProps) => {
  return (
    <VStack spacing={4} w="full" align="flex-start">
      <Text fontSize="xl" fontWeight={600}>
        All Posts
      </Text>

      <Posts posts={posts} />
    </VStack>
  )
}

export default AllPosts
