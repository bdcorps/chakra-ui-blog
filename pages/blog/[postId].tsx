import { Box, Container, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { Site } from "../../types";
import { getSite } from "../api/sites";

export default function BlogItemPage({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Container maxW="container.md" p={6}>
      <VStack spacing={6} align="flex-start">
        <Link color="gray.500" fontSize="sm" href="/">
          ← Back
        </Link>
        <VStack spacing={2} align="flex-start">
          <Text color="gray.500" fontSize="sm">
            Thursday, June 23, 2022
          </Text>
          <Heading fontSize="3xl">{post.title}</Heading>
          <Text>{post.description}</Text>
          <Text color="gray.500" fontSize="sm">
            By Adam Wathan
          </Text>
        </VStack>

        <Box>
          <Image
            src={post.image}
            alt="Blog header image"
            width={800}
            height={400}
          ></Image>
        </Box>

        <Text color="gray.600" fontSize="md">
          When I was early in my programming career, I loved following
          thoughtbot. They were always writing interesting programming articles,
          producing fantastic screencasts, and publishing incredible books. I
          could tell they really cared about their craft and it inspired the
          hell out of me.
        </Text>
      </VStack>
    </Container>
  );
}

export async function getServerSideProps({ params }: any) {
  const postId = Number(params.postId);
  const site: Site | null = await getSite();

  const post: any = site.posts.find((post) => post.id === postId);

  const props: any = { post };
  return {
    props,
  };
}