import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import AllPosts from "../components/AllPosts";
import Layout from "../components/Layout";
import { Site } from "../types";
import { getSite } from "./api/sites";

interface SiteIndexProps {
  site: Site;
}

const SiteIndex: FunctionComponent<SiteIndexProps> = ({
  site: { name, description, subdomain, posts },
}: SiteIndexProps) => {
  return (
    <Layout>
      <Center height="20vh">
        <Box>
          <Heading fontSize="xx-large">{name}</Heading>
          <Text align="center">{description}</Text>
        </Box>
      </Center>

      <AllPosts posts={posts} />
    </Layout>
  );
};

export async function getServerSideProps({ params }: any) {
  const site: Site | null = await getSite();

  const props: any = { site };
  return {
    props,
  };
}

export default SiteIndex;
