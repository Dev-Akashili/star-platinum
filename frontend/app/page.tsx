import { Box, Flex, HStack } from "@chakra-ui/react";
import Home from "./home/page";
import { links } from "@/data";
import { PageBtn } from "@/components/Button";

export default function Page() {
  return (
    <Box>
      <Flex
        justifyContent={{ base: "center", lg: "right" }}
        mt="25px"
        mr={{ base: "0", lg: "10%" }}
      >
        <HStack>
          <PageBtn
            name="Sponsor"
            link="/"
            target={false}
            imageLink="https://img.icons8.com/color/48/filled-like.png"
            imageAlt="heart"
          />
          <PageBtn
            name="Contribute"
            link={links.org}
            target={true}
            imageLink="https://img.icons8.com/fluency/48/star--v1.png"
            imageAlt="star"
          />
        </HStack>
      </Flex>
      <Home />
    </Box>
  );
}
