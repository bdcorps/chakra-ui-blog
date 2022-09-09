import { Stack, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import { PostType } from '../../types'
import { Post } from '../Post'

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
