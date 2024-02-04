import { text } from "@/data";
import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { Metadata } from "next";
import HomeCard, { HomeButton } from "./components";

export const metadata: Metadata = {
  title: "Star Platinum Auth"
};

export default function Home() {
  return (
    <Flex
      justifyContent="center"
      p={{ base: "20px 0px", lg: "50px 150px" }}
      mt={{ base: "0px", lg: "30px" }}
    >
      <Stack mt="auto" gap={5} alignItems="center">
        <Text
          fontSize={{ base: "5xl", lg: "6xl" }}
          fontWeight="bold"
          m="20px"
          w={{ base: "95%", lg: "100%" }}
          textAlign="center"
        >
          {text.home.title}
        </Text>
        <Text
          fontSize={{ base: "lg", lg: "xl" }}
          color="grey"
          textAlign="center"
        >
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
        <Flex
          flexFlow="wrap"
          justifyContent="center"
          mt={{ base: "25px", lg: "0px" }}
        >
          {text.home.cards.map((card, index) => (
            <HomeCard
              key={index}
              title={card.title}
              description={card.description}
              imageLink={card.imageLink}
              imageAlt={card.imageAlt}
            />
          ))}
        </Flex>
      </Stack>
    </Flex>
  );
}
