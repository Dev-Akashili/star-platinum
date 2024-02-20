import { Box, Flex, HStack } from "@chakra-ui/react";
import Home from "./home/page";
import { links } from "@/data";
import { PageBtn, PageIcon } from "@/components/Button";

export default function Page() {
  return (
    <Box mt={{ base: "100px", lg: "120px" }}>
      <Flex justifyContent="right" mt="25px" mr={{ base: "5%", lg: "10%" }}>
        <HStack spacing={3}>
          <PageIcon
            link={links.org}
            imageLink="https://img.icons8.com/material-outlined/48/github.png"
            imageAlt="GitHub"
          />
          <PageIcon
            link={links.org}
            imageLink="https://img.icons8.com/material-sharp/48/linkedin--v1.png"
            imageAlt="LinkedIn"
          />
          <PageIcon
            link={links.org}
            imageLink="https://img.icons8.com/material-outlined/48/twitterx--v2.png"
            imageAlt="Twitter"
          />
          <PageBtn
            name="Sponsor"
            link="/"
            target={false}
            imageLink="https://img.icons8.com/color/48/filled-like.png"
            imageAlt="heart"
          />
        </HStack>
      </Flex>
      <Home />
    </Box>
  );
}
