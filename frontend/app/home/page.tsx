import { text } from "@/data";
import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { Metadata } from "next";
import HomeCard, { HomeButton } from "./components";

export const metadata: Metadata = {
  title: "Star Platinum Auth"
};

export default function Home() {
  return (
    <Flex justifyContent="center" p="50px 150px" mt="30px">
      <Stack mt="auto" gap={5} alignItems="center">
        <Text
          fontSize="6xl"
          fontWeight="bold"
          m="20px"
          w="100%"
          textAlign="center"
        >
          {text.home.title}
        </Text>
        <Text fontSize="xl" color="grey" textAlign="center">
          {text.home.description}
        </Text>
        <HStack justifyContent="center" gap={5} mt="20px">
          <HomeButton
            name="Get Started"
            link="/auth/sign-in"
            category="positive"
          />
          <HomeButton name="Learn More" link="/" category="negative" />
        </HStack>
        <Flex flexFlow="wrap">
          {text.home.cards.map((card, index) => (
            <Box
              key={index}
              w="50%"
              p="50px 80px"
              _hover={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
              }}
            >
              <HomeCard
                title={card.title}
                description={card.description}
                imageLink={card.imageLink}
                imageAlt={card.imageAlt}
              />
            </Box>
          ))}
        </Flex>
      </Stack>
    </Flex>
  );
}
