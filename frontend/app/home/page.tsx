import { text } from "@/data";
import { Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Star Platinum Auth"
};

interface HomeButtonsProps {
  name: string;
  link: string;
  category: "positive" | "negative";
}

function HomeButton({ name, link, category }: HomeButtonsProps) {
  return (
    <Link href={link}>
      <Button
        border={category === "negative" ? "2px solid" : ""}
        color={category === "positive" ? "white" : "black"}
        bgColor={category === "positive" ? "black" : "white"}
        size="lg"
        _hover={{
          bgColor: category === "positive" ? "white" : "black",
          color: category === "positive" ? "black" : "white",
          border: "2px solid"
        }}
      >
        {name}
      </Button>
    </Link>
  );
}

export default function Home() {
  return (
    <Flex justifyContent="center" maxH="100vh" p="50px 150px" mt="30px">
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
      </Stack>
    </Flex>
  );
}
