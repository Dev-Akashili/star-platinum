import { text } from "@/data";
import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { Metadata } from "next";
import HomeCard, { HomeButton } from "./components";

export const metadata: Metadata = {
  title: "Star Platinum Auth"
};

export default function Home() {
  return (
    <>
      <Flex justifyContent="center" p={{ base: "40px 0px", lg: "25px 150px" }}>
        <Stack mt="auto" gap={8} alignItems="center">
          <Text
            fontSize={{ base: "5xl", md: "5xl", lg: "7xl" }}
            fontWeight="bold"
            w="95%"
            textAlign="center"
          >
            {text.home.title}
          </Text>
          <Text
            fontSize={{ base: "20px", lg: "22px" }}
            color="grey"
            textAlign="center"
            w={{ base: "85%", md: "55%", lg: "50%" }}
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
        </Stack>
      </Flex>
      <Flex justifyContent="center" alignItems="center" minHeight="100vh">
        <Box
          m="50px 0 150px 0"
          p={{ base: 10, lg: "20px 100px" }}
          bgColor="#F5F5F5"
          w={{ base: "100%", md: "95%", lg: "95%" }}
          borderRadius={{ base: 0, md: 0, lg: "10px" }}
        >
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
        </Box>
      </Flex>
    </>
  );
}
